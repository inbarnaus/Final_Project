const mongoose = require('mongoose');
// const xlsxFile = require('read-excel-file/node');
// const mongodb = require('mongodb');
// const ObjectId = Schema.ObjectId;
const Schema = mongoose.Schema;
const User = mongoose.model('User', new Schema({
    email: String,
    password: String,
    isLawyer: Boolean
}));

const Asset = mongoose.model('Asset', new Schema({
    buildNum: Number, 
    fieldNum: Number, 
    apartNum: Number, 
    level: Number, 
    roomNum: Number, 
    apartArea: Number, 
    apartAreaAq: Object, 
    balconyArea: Number, 
    warehouseArea: Number, 
    warehouseNum: Number, 
    parkingNum: Number, 
    parkingQuantity1: Number, 
    parkingQuantity2: Object, 
    apartNumPrice: Number,
    apartTenantPrice: Number, 
    notes: Object, 
    apartMMDprice: Object, 
    dir: Object
}));

const Acquisition = mongoose.model('Acquisition', new Schema({
    buildNum: Number, 
    fieldNum: Number, 
    apartNum: Number, 
    buyerName1: String,
    buyerId1: String,
    buyerName2: {type: String, default: null},
    buyerId2: {type: String, default: null},
    parking1: Number,
    parking2: {type: Number, default: null},
    garage: Number,
    purchaseDate: Date,
    reportDate: Date,
    price: Number,
    assessmentNum: {type: Number, default: null},
    referenceNum: {type: Number, default: null},
    mortgageSum: Number,
    mortageBank: Number,
    notes: String,
    scanForm: {type: String, default: null}, //TODO
    firstApartment: {type: Boolean, default: true},
    reported: {type: Boolean, default: false},
}));
var reports = [];

// xlsxFile('./DataAccess/G4_example.xlsx').then((rows) => {
//     for (var i=0; i<rows.length; i++)
//         rows[i] = reverseString(rows[i]);
//     const length = rows.length - 1; 
//     var flag;
//     for(let j = length; j >= 0; j--) {
//         if(typeof rows[j][0] != 'number'){
//             flag = j+1;
//             break;
//         }
//     }
//     var tempRepo = rows.slice(flag, length+1);
//     makeReports(tempRepo);
// }).catch((err) => {console.log(err)});

function gen_succ_res (data){
    return {
        "succeed": true,
        "res": data
    };
};

function gen_fail_res (data){
    return {
        "succeed": false,
        "res": data
    };
};
const Dal = {
    add_g4 : (tempReports) =>{
        for(var i=0; i<tempReports.length; i++){
            const repo = new Asset({buildNum: tempReports[i][0]}, {fieldNum: tempReports[i][1]}, {apartNum: tempReports[i][2]}, 
                {level: tempReports[i][3]}, {roomNum: tempReports[i][4]}, {apartArea: tempReports[i][5]}, {apartAreaAq: tempReports[i][6]}, {balconyArea: tempReports[i][7]}, {warehouseArea: tempReports[i][8]}, 
                {warehouseNum: tempReports[i][9]}, {parkingNum: tempReports[i][10]}, {parkingQuantity1: tempReports[i][11]}, {parkingQuantity2: tempReports[i][12]}, {apartNumPrice: tempReports[i][13]}, {apartTenantPrice: tempReports[i][14]}, 
                {notes: tempReports[i][15]}, {apartMMDprice: tempReports[i][16]}, {dir: tempReports[i][17]});
            reports.push(repo);
            repo.save().then(() => console.log('good save')).catch((err)=> {console.log("bad save")});
        }
        console.log(reports);
    },

    get_apartment: async (block, building, apartment) =>{
        await Asset.find({ 'buildNum': building, 'fieldNum': block, 'apartNum': apartment }, function (err, record) {
            if (err) return {succeed: Flase, res: err};
            return {succeed: True, res: record};
        });
    },

    add_purchase: async (apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null, second_buyer_id = null) => {
        purch = new Acquisition({
            'buildNum': apartment_purchase['building'], 
            'fieldNum': apartment_purchase['block'], 
            'apartNum': apartment_purchase['apartment'], 
            'buyerName1': first_buyer_name,
            'buyerId1': first_buyer_id,
            'buyerName2': second_buyer_name,
            'buyerId2': second_buyer_id,
        });
        block =apartment_purchase['block'];
        building = apartment_purchase['building'];
        apartment = apartment_purchase['apartment'];
        await Asset.findOne({ 'buildNum': building, 'fieldNum': block, 'apartNum': apartment }, async function (err) {
            if (err) return {succeed: Flase, res: err};
            await Acquisition.findOne({ 'buildNum': building, 'fieldNum': block, 'apartNum': apartment }, function(err){ 
                if(err){
                    return gen_fail_res(err);
                }
                purch.save();
                return gen_succ_res(purch);
            });
        });
    },

    get_purchase: async (block_num, building_num, apartment_num) =>{
        await Acquisition.find({ 'buildNum': building_num, 'fieldNum': block_num, 'apartNum': apartment_num }, function (err, record) {
            if (err) return {succeed: Flase, res: err};
            return {succeed: True, res: record};
        });
    },

    set_purchase: async (block_num, building_num, apartment_num, new_purchase_features) => {
        const func = (str, record) => {
            return (new_purchase_features[str] ? new_purchase_features[str] : record[str]);
        };
        await Acquisition.find({ 'buildNum': building_num, 'fieldNum': block_num, 'apartNum': apartment_num }, async function (err, record) {
            if (err) return {succeed: Flase, res: err};
            update_ac = {
                buyerName1: func('buyerName1', record),
                buyerId1: func('buyerId1', record),
                buyerName2: func('buyerName2', record),
                parking1: func('parking1', record),
                parking2: func('parking2', record),
                garage: func('garage', record),
                purchaseDate: func('purchaseDate', record),
                reportDate: func('reportDate', record),
                price: func('price', record),
                assessmentNum: func('assessmentNum', record),
                mortgageSum: func('mortgageSum', record),
                mortageBank: func('mortageBank', record),
                notes: func('notes', record),
                scanForm: func('scanForm', record),
                firstApartment: func('scanForm', record),
                reported: func('scanForm', record)
            };
            await Acquisition.findOneAndUpdate({ 'buildNum': building_num, 'fieldNum': block_num, 'apartNum': apartment_num },
                $set(update_ac), function(err, updtare_record){
                    if(err){
                        return gen_fail_res(err);
                    }
                    else{
                        return gen_succ_res(updtare_record);
                    }
                });
        });
    },

    get_user: async (email) =>{
        await User.find({ 'email': email }, function (err, record) {
            if (err){
                // console.log(err);
                return {succeed: false, res: err};
            }
            // console.log(record);
            return {succeed: true, res: record};
        });
    },

    get_all_unreported_purchases: async () => {
        await Acquisition.find({ 'reprted': False }, 'fieldNum buildNum apartNum purchaseDate reportDate', function (err, record) {
            if (err) return {succeed: Flase, res: err};
            return {succeed: True, res: record};
        });
    },

    register_new_costumer: async (mail, password) => {
        user = new User({
            'email': mail,
            'password': password,
            'isLawyer': false
        });
        await User.findOne({ 'email': mail }, function (err) {
            if (err) {
                user.save();    
                return gen_succ_res(user);
            }
            return {succeed: false, res: "משתמש כבר רשום למערכת"};
        });
    },

    register_new_lawyer: async (mail, password) =>{
        await User.findOne({'email': mail}, function(err, res){
            
            if(err || res == null){
                user = new User({
                    'email': mail,
                    'password': password,
                    'isLawyer': true
                });
                user.save();
                return gen_succ_res(user);
            }
            else{
                return {succeed: false, res: "משתמש כבר קיים במערכת"};
            }
        });
    },

    add_scanning: async (block, building, apartment, file) =>{
        await Asset.findOne({ 'buildNum': building, 'fieldNum': block, 'apartNum': apartment }, async function(err, res){
            if(err || res == null){
                return gen_fail_res("דירה לא נמצאה");
            }
            await Acquisition.findOneAndUpdate({ 'buildNum': building, 'fieldNum': block, 'apartNum': apartment, 'reported': false, 'scanForm': null}, {'scanForm': file}, 
                function(err, doc, res){
                    if(err){
                        return gen_fail_res(err);
                    }
                    return gen_succ_res(res);
                }
            );
        });
    },

    //TODO
    send_report: async (block, building, apartment, file_stuff) =>{
        await Acquisition.findOneAndUpdate({ 'buildNum': building, 'fieldNum': block, 'apartNum': apartment, 'reported': false, 'assessmentNum': null, 'referenceNum': null},
            $set({
                reported: true, 
                assessmentNum: file_stuff['assessment'], 
                referenceNum: file_stuff['reference']
            }),
            function (err, res) {
                if(err || res == null)
                    return gen_fail_res(err);
                else
                    return gen_succ_res(res);
            });
    },

    /**** PRIVATE METHODS FOR TESTS:
     * 
     * 
     * 
     */
    unregister: async (email) =>{
        ans;
        await User.findOneAndRemove({email: email}, function (err, user){
            if(err){
                ans = gen_fail_res(err);
                return gen_fail_res(err);
            }
            else{
                ans = gen_succ_res(user);
                return gen_succ_res(user);
            }
        });
        return ans;
    },

    add_apartment: async(fieldNum, buildNum, apartNum, level, roomNum, apartArea, apartAreaAq, balconyArea, warehouseArea, warehouseNum, parkingNum, parkingQuantity1, parkingQuantity2=null, apartNumPrice, apartTenantPrice, notes=null, apartMMDprice, dir) =>{
        let asset = new Asset({
            buildNum: buildNum, 
            fieldNum: fieldNum, 
            apartNum: apartNum, 
            level: level, 
            roomNum: roomNum, 
            apartArea: apartArea, 
            apartAreaAq: apartAreaAq, 
            balconyArea: balconyArea, 
            warehouseArea: warehouseArea, 
            warehouseNum: warehouseNum, 
            parkingNum: parkingNum, 
            parkingQuantity1: parkingQuantity1, 
            parkingQuantity2: parkingQuantity2, 
            apartNumPrice: apartNumPrice,
            apartTenantPrice: apartTenantPrice, 
            notes: notes, 
            apartMMDprice: apartMMDprice, 
            dir: dir
        });
        await Asset.findOne({
            buildNum: buildNum, 
            fieldNum: fieldNum, 
            apartNum: apartNum
        }, function(err){
                if(err){
                    asset.save();
                    return gen_succ_res(asset);
                }
                return gen_fail_res("דירה כבר קיימת");       
        });
    },

    remove_apartment: async(fieldNum, buildNum, apartNum) =>{
        await Asset.findOneAndRemove({
            buildNum: buildNum, 
            fieldNum: fieldNum, 
            apartNum: apartNum
        }, function(err, rec){
            if(err){
                return gen_fail_res(err);
            }
            else{
                return gen_succ_res(rec);
            }
        });
    }
};

module.exports = Dal;

// function extract_files_for_purchases (files_list) {
// };


mongoose.connect('mongodb+srv://mnh:12345@cluster0-sk1ck.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(async ()=>{
    console.log("good connect");
    ans = await Dal.unregister("test");
    console.log(ans);
})
.catch(()=>{console.log("bad connect")});