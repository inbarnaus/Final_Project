const randomstring = require("randomstring");
const mongoose = require('mongoose');
const fs = require('mongoose-fs');

const Schema = mongoose.Schema;
const User = mongoose.model('User', new Schema({
    email: String,
    password: String,
    isLawyer: Boolean
}));

const Block = mongoose.model('Block', new Schema({
    name: String,
    file: Buffer
}));

const Asset = mongoose.model('Asset', new Schema({
    buildNum: Number, 
    blockNum: Number, 
    apartNum: Number, 
    level: Number, 
    roomNum: Number, 
    apartArea: Number, 
    apartAreaAq: Number, 
    balconyArea: Number, 
    warehouseArea: Number, 
    warehouseNum: Number, 
    parkingNum: Number, 
    parking1: Number, 
    parking2: Number, 
    price: Number,
    apartTenantPrice: Number, 
    notes: String, 
    apartMMDprice: Number, 
    dir: Number
}));

const Acquisition = mongoose.model('Acquisition', new Schema({
    buildNum: Number, 
    blockNum: Number, 
    apartNum: Number, 
    buyerName1: String,
    buyerId1: String,
    buyerName2: {type: String, default: null},
    buyerId2: {type: String, default: null},
    parking1: Number,
    parking2: {type: Number, default: null},
    warehouseArea: Number,
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
    add_g4 : async (tempReports, file) =>{
        if(tempReports == null || tempReports == []){
            return gen_succ_res(tempReports);
        }
        block = tempReports[0][1];
        ans = await Block.findOne({'name': block}, 'name');
        if(ans){
            return gen_fail_res("המגרש כבר קיים במערכת");
        }
        newBlock = new Block({
            name: block,
            file: file
        }).save();
        reports = []
        for(var i=0; i<tempReports.length; i++){
            repo = {buildNum: tempReports[i][0], blockNum: tempReports[i][1], apartNum: tempReports[i][2], 
                level: tempReports[i][3], roomNum: tempReports[i][4], apartArea: tempReports[i][5], apartAreaAq: tempReports[i][6], balconyArea: tempReports[i][7], warehouseArea: tempReports[i][8], 
                warehouseNum: tempReports[i][9], parkingNum: tempReports[i][10], parking1: tempReports[i][11], parking2: tempReports[i][12], price: tempReports[i][13], apartTenantPrice: tempReports[i][14], 
                notes: tempReports[i][15], apartMMDprice: tempReports[i][16], dir: tempReports[i][17]};
            reports.push(repo);
            //repo.save().then(() => console.log('good save')).catch((err)=> {console.log("bad save")});
        }
        assets = await Asset.collection.insert(reports);
        if(assets == null || assets == []){
            return gen_fail_res("בעיה");
        }
        else{
            return gen_succ_res(reports);
        }
    },

    replace_g4: async(tempReports, file) =>{
        if(tempReports == null || tempReports == []){
            return gen_succ_res(tempReports);
        }
        block = tempReports[0][1];
        ans = await Block.findOneAndRemove({name: block});
        if(!ans){
            return gen_fail_res("המגרש לא קיים במערכת");
        }
        await Asset.remove({blockNum: block});
        newBlock = new Block({
            name: block,
            file: file
        }).save();
        reports = []
        for(var i=0; i<tempReports.length; i++){
            repo = {buildNum: tempReports[i][0], blockNum: tempReports[i][1], apartNum: tempReports[i][2], 
                level: tempReports[i][3], roomNum: tempReports[i][4], apartArea: tempReports[i][5], apartAreaAq: tempReports[i][6], balconyArea: tempReports[i][7], warehouseArea: tempReports[i][8], 
                warehouseNum: tempReports[i][9], parkingNum: tempReports[i][10], parking1: tempReports[i][11], parking2: tempReports[i][12], price: tempReports[i][13], apartTenantPrice: tempReports[i][14], 
                notes: tempReports[i][15], apartMMDprice: tempReports[i][16], dir: tempReports[i][17]};
            reports.push(repo);
            //repo.save().then(() => console.log('good save')).catch((err)=> {console.log("bad save")});
        }
        assets = await Asset.collection.insert(reports);
        if(assets == null || assets == []){
            return gen_fail_res("בעיה");
        }
        else{
            return gen_succ_res(reports);
        }
    },

    get_apartment: async (block, building, apartment) =>{
        ans = null;
        let record = await Asset.findOne({ 'buildNum': building, 'blockNum': block, 'apartNum': apartment });
        if (record == null) ans = {succeed: false, res: "הדירה לא קיימת ברשומות"};
        else ans = {succeed: true, res: record};
        return ans;
    },

    add_purchase: async (apartment_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null, second_buyer_id = null, purchase_attr) => {
        attr = purchase_attr ? purchase_attr : {};
        block = apartment_purchase['block'];
        building = apartment_purchase['building'];
        apartment = apartment_purchase['apartment'];
        res2 = await Acquisition.findOne({ 'buildNum': building, 'blockNum': block, 'apartNum': apartment });
        if(res2 != null){
            return gen_fail_res("רכישה כבר מתועדת ברשימה");
        }
        else{
            res1 = await Asset.findOne({ 'buildNum': building, 'blockNum': block, 'apartNum': apartment });
            if (res1 == null) {
                return {succeed: false, res: "דירה לא קיימת במערכת"};
            }
            else{
                let set_attr = (val) => {return (attr[val] != null ? attr[val] : res1[val]);};
                purch = new Acquisition({
                    'buildNum': apartment_purchase['building'], 
                    'blockNum': apartment_purchase['block'], 
                    'apartNum': apartment_purchase['apartment'], 
                    'buyerName1': first_buyer_name,
                    'buyerId1': first_buyer_id,
                    'buyerName2': second_buyer_name,
                    'buyerId2': second_buyer_id,
                    parking1: set_attr('parking1'),
                    parking2: set_attr('parking2'),
                    warehouseArea: set_attr('warehouseArea'),
                    purchaseDate: Date(purchase_attr['purchaseDate']),
                    reportDate: Date(purchase_attr['reportDate'] || Date(purchase_attr['purchaseDate']) + 29),
                    price: set_attr('price'),
                    assessmentNum: attr['assessmentNum'],
                    referenceNum: attr['referenceNum'],
                    mortgageSum: attr['mortgageSum'],
                    mortageBank: attr['mortageBank'],
                    notes: attr['notes'],
                    scanForm: attr['scanForm'],
                    firstApartment: attr['firstApartment'],
                });
                ans = gen_succ_res(purch);
                await purch.save();
                return ans;
            }
        }
    },

    get_purchase: async (block_num, building_num, apartment_num) =>{
        record = await Acquisition.findOne({ 'buildNum': building_num, 'blockNum': block_num, 'apartNum': apartment_num });
        if (record == null){
            return {succeed: false, res: "הדירה המבוקשת לא נמצאת במערכת"};
        }
        else{
            return {succeed: true, res: record};
        }
    },

    set_purchase: async (block_num, building_num, apartment_num, new_purchase_features) => {
        ans = null;
        record = await Acquisition.findOneAndUpdate({ 'buildNum': building_num, 'blockNum': block_num, 'apartNum': apartment_num },
            {"$set" : new_purchase_features}, function(err, update_record){
                if(err || update_record == null){
                    ans = gen_fail_res(err || "רכישה לא מתועדת במערכת");
                }
                else{
                    ans = gen_succ_res(update_record);
                }
            }
        );
        if (record == null) return {succeed: false, res: "רכישה לא מתועדת במערכת"};
        return ans;
    },

    get_user: async (email) =>{
        ans = await User.findOne({ 'email': email });
        console.log(ans);
        if(ans == null){
            return gen_fail_res("משתמש לא נמצא במערכת");
        }
        else{
            return gen_succ_res(ans);
        }
    },

    login: async (mail, pass) => {
        // console.log("login");
        user = await User.findOne({'email': mail, 'password': pass});
        // console.log(user);
        ans = null;
        if(user){
            ans = gen_succ_res(user);
        }
        else{
            ans = gen_fail_res("שם משתמש או סיסמא לא נכונים");
        }
        return ans;
    },

    get_all_unreported_purchases: async () => {
        return gen_succ_res("check");
        let record_scanned = await Acquisition.find({ 'reported': false, 'scanForm' : {$ne: null} }, 'blockNum buildNum apartNum scanForm purchaseDate reportDate');
        if (!record_scanned) record_scanned = [];
        console.log(record_scanned);
        let record_notscanned = await Acquisition.find({ 'reported': false, 'scanForm' : null }, 'blockNum buildNum apartNum scanForm purchaseDate reportDate');
        if (record_scanned == null) record_notscanned = [];
        console.log(record_notscanned);
        return gen_succ_res({
            scanned_reports: record_scanned, 
            unscanned_reports: record_notscanned
        });
    },

    register_new_costumer: async (mail) => {
        ans = await User.findOne({ 'email': mail });
        if (ans == null) {
            user = new User({
                'email': mail,
                'password': randomstring.generate(6),
                'isLawyer': false
            });
            ans = gen_succ_res(user);    
            await user.save((err)=> {
                if(err){
                    ans = gen_fail_res(err);
                }
            });
        }
        else {
            ans = {succeed: false, res: "משתמש כבר רשום למערכת"};
        }
        return ans;
    },

    register_new_lawyer: async (mail) =>{
        ans = await User.findOne({ 'email': mail });
        if (ans == null) {
            user = new User({
                'email': mail,
                'password': randomstring.generate(6),
                'isLawyer': true
            });
            ans = gen_succ_res(user);
            await user.save((err)=> {
                if(err){
                    ans = gen_fail_res(err);
                }
            });
        }
        else {
            ans = {succeed: false, res: "משתמש כבר רשום למערכת"};
        }
        console.log(ans);
        return ans;
    },

    change_password: async (mail, oldpass, newpass) => {
        us = await User.findOneAndUpdate({'email' : mail, 'password': oldpass}, {'password': newpass}, {new: true});
        if(us == null){
            return gen_fail_res("לא נמצא משתמש במערכת עם הפרטים הרצויים");
        }
        else{
            return gen_succ_res(us)
        }
    },

    add_scanning: async (block, building, apartment, file) =>{
        ans = null;
        res = await Asset.findOne({ 'buildNum': building, 'blockNum': block, 'apartNum': apartment });
        if(res == null){
            return gen_fail_res("דירה לא נמצאה");
        }
        await Acquisition.findOneAndUpdate({ 'buildNum': building, 'blockNum': block, 'apartNum': apartment, 'reported': false}, {'scanForm': file}, 
            async function(err, res){
                if(err || res == null){
                    ans = gen_fail_res(err || "רכישה לא מתועדת");
                }
                else{
                    ans = gen_succ_res(res);
                }
            }
        );
        return ans;
    },

    //TODO
    send_report: async (block, building, apartment, file_stuff) =>{
        ans = null;
        await Acquisition.findOneAndUpdate({ 'buildNum': building, 'blockNum': block, 'apartNum': apartment, 'scanForm': { $ne: null} ,'reported': false, 'assessmentNum': null, 'referenceNum': null},
            {
                "$set" : {
                    reported: true, 
                    assessmentNum: file_stuff['assessment'], 
                    referenceNum: file_stuff['reference']
                }
            },
            function (err, res) {
                if(err || res == null)
                    ans = gen_fail_res(err || "רכישה לא מתועדת במערכת");
                else
                    ans = gen_succ_res(res);
            });
        return ans;
    },

    /**** PRIVATE METHODS FOR TESTS:
     * 
     * 
     * 
     */
    unregister: async (email) =>{
        ans = await User.findOneAndRemove({email: email});
        if(ans){
            return gen_succ_res(ans);
        }
        else{
            return gen_fail_res("משתמש לא נמצא במערכת");
        }
    },

    add_apartment: async(blockNum, buildNum, apartNum, level, roomNum, apartArea, apartAreaAq, balconyArea, warehouseArea, warehouseNum, parkingNum, parking1, parking2=null, price, apartTenantPrice, notes=null, apartMMDprice, dir) =>{
        let asset = new Asset({
            buildNum: buildNum, 
            blockNum: blockNum, 
            apartNum: apartNum, 
            level: level, 
            roomNum: roomNum, 
            apartArea: apartArea, 
            apartAreaAq: apartAreaAq, 
            balconyArea: balconyArea, 
            warehouseArea: warehouseArea, 
            warehouseNum: warehouseNum, 
            parkingNum: parkingNum, 
            parking1: parking1, 
            parking2: parking2, 
            price: price,
            apartTenantPrice: apartTenantPrice, 
            notes: notes, 
            apartMMDprice: apartMMDprice, 
            dir: dir
        });
        res = await Asset.findOne({
            buildNum: buildNum, 
            blockNum: blockNum, 
            apartNum: apartNum
        });
        if(res == null){
            ans = gen_succ_res(asset);
            await asset.save();
            return ans;
        }
        else{
            return gen_fail_res("דירה כבר קיימת");       
        }
    },

    remove_apartment: async(blockNum, buildNum, apartNum) =>{
        rec = await Asset.findOneAndRemove({
            buildNum: buildNum, 
            blockNum: blockNum, 
            apartNum: apartNum
        });
        if(rec == null){
            return gen_fail_res(err);
        }
        else{
            return gen_succ_res(rec);
        }
    },

    remove_purchase: async(blockNum, buildNum, apartNum) =>{
        rec = await Acquisition.findOneAndRemove({
            buildNum: buildNum, 
            blockNum: blockNum, 
            apartNum: apartNum
        });
        if(rec == null){
            return gen_fail_res(err);
        }
        else{
            return gen_succ_res(rec);
        }
    }
};

module.exports = Dal;

// function extract_files_for_purchases (files_list) {
// };


mongoose.connect('mongodb+srv://mnh:12345@cluster0-sk1ck.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false 
})
.then(async ()=>{
    console.log("db is connected");  
    // ans = await Dal.get_all_unreported_purchases();
    // console.log(ans);
    // let apartments = [
    //     [ 1, 112, 2, 2, 2, 70, null, 10, 5, 1, 1, 12, null, 1200000, 900000, null, null, null, null ],
    //     [ 2, 112, 3, 2, 3, 70, null, 10, 5, 2, 2, 23, null, 1200000, 900000, null, null, null, null ],
    //     [ 3, 112, 4, 5, 2, 70, null, 10, 5, 5, 1, 34, null, 1200000, 900000, null, null, null, null ],
    //     [ 4, 112, 1, 4, 2, 70, null, 10, 5, 4, 1, 13, null, 1200000, 900000, null, null, null, null ],
    //     [ 5, 112, 2, 3, 4, 90, null, 10, 5, 2, 1, 15, null, 1200000, 900000, null, null, null, null ],
    //     [ 6, 112, 3, 3, 3, 80, null, 10, 5, 1, 2, 24, null, 1200000, 900000, null, null, null, null ]
    //  ];
    // console.log(apartments);
    // res = await Dal.add_g4(apartments, null);
    // console.log(res);

    // ap1 = await Dal.add_apartment("1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1");
    // console.log(ap1);
    // pu1 = await Dal.add_purchase(
    //     {
    //         block: "1",
    //         building: "1",
    //         apartment: "1"
    //     },
    //     "avabash",
    //     "1");
    // console.log(pu1);
})
.catch(()=>{
    console.log("db is NOT connect")
});
