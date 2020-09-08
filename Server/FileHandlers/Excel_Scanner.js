// //https://www.npmjs.com/package/excel-to-mongodb for more details

// scanner = require('excel-to-mongoDB');

// var credentials = {
//     host: host,
//     path: "path for the excel file",
//     collection: ["Collection name for creation"],
//     db: "Your Database name"
// };

// var options = {
//     safeMode: false, //Backup the db to the current working directory in dump/<db> folder.
//     verbose: false, //Console.log the current step processing.
//     customStartEnd: false, //Custom insert the row and columns rather than full excel-file. Do take care! Specifying endRow or endCol may result in insertion of redundant data.
//     startRow: "<required>", //Valid only if customStartEnd is true. Defines the start Row of the data.
//     endRow: "<required>", //Valid only if customStartEnd is true. Defines the end Row of the data.
//     startCol: "<required>", //Valid only if customStartEnd is true. Defines the start Column of the data.
//     endCol: "<required>" //Valid only if customStartEnd is true. Defines the end Column of the data.
// };

// excelMongo.covertToMongo(credentials, options, (callback) => {console.log(callback)}); //returns documents inserted in the database.

const xlsxFile = require('read-excel-file/node');
const Scanner = {
    reverseString : (arr) =>{
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
        // console.log(arr);
        return arr;
    },

    parse_xl : async (file) => {
        console.log("parsexl");
        console.log(file);
        rows = await xlsxFile(file);
        console.log(rows);
        for (var i=0; i<rows.length; i++)
            rows[i] = Scanner.reverseString(rows[i]);
        const length = rows.length - 1; 
        var flag;
        for(let j = length; j >= 0; j--) {
            if(typeof rows[j][0] != 'number'){
                flag = j+1;
                break;
            }
        }
        var tempRepo = rows.slice(flag, length+1);
        return tempRepo;
    }
}

module.exports = Scanner;