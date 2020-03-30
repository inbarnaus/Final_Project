const mongoose = require('mongoose');
const xlsxFile = require('read-excel-file/node');

var reports = []

mongoose.connect('mongodb+srv://mnh:12345@cluster0-sk1ck.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const Report = mongoose.model('Report', new mongoose.Schema({_id: new ObjectID(), 
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
    dir: Object}));

xlsxFile('./G4_example.xlsx').then((rows) => {
    for (var i=0; i<rows.length; i++)
        rows[i] = reverseString(rows[i]);
    const length = rows.length - 1; 
    var flag;
    for(let j = length; j >= 0; j--) {
        if(typeof rows[j][0] != 'number'){
            flag = j+1;
            break;
        }
    }
    var tempRepo = rows.slice(flag, length+1);
    makeReports(tempRepo);
})

function reverseString (arr){
    for(var i=0; i< arr.length; i++){
        if(typeof arr[i] == 'string' && arr[i] != null){
            var revArray = ""; 
            const length = arr[i].length - 1; 
            for(let j = length; j >= 0; j--) {
                revArray += arr[i][j];
            }
            arr[i] = revArray;  
        }
    }
    return arr;
}

function makeReports(tempReports){    
    for(var i=0; i<tempReports.length; i++){
        const repo = new Report({buildNum: tempReports[i][0]}, {fieldNum: tempReports[i][1]}, {apartNum: tempReports[i][2]}, 
            {level: tempReports[i][3]}, {roomNum: tempReports[i][4]}, {apartArea: tempReports[i][5]}, {apartAreaAq: tempReports[i][6]}, {balconyArea: tempReports[i][7]}, {warehouseArea: tempReports[i][8]}, 
            {warehouseNum: tempReports[i][9]}, {parkingNum: tempReports[i][10]}, {parkingQuantity1: tempReports[i][11]}, {parkingQuantity2: tempReports[i][12]}, {apartNumPrice: tempReports[i][13]}, {apartTenantPrice: tempReports[i][14]}, 
            {notes: tempReports[i][15]}, {apartMMDprice: tempReports[i][16]}, {dir: tempReports[i][17]});
        reports.push(repo);
       repo.save().then(() => console.log('check'));
    }
        //console.log(reports);
}