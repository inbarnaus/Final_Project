//https://www.npmjs.com/package/excel-to-mongodb for more details

scanner = require('excel-to-mongoDB');

var credentials = {
    host: host,
    path: "path for the excel file",
    collection: ["Collection name for creation"],
    db: "Your Database name"
};

var options = {
    safeMode: false, //Backup the db to the current working directory in dump/<db> folder.
    verbose: false, //Console.log the current step processing.
    customStartEnd: false, //Custom insert the row and columns rather than full excel-file. Do take care! Specifying endRow or endCol may result in insertion of redundant data.
    startRow: "<required>", //Valid only if customStartEnd is true. Defines the start Row of the data.
    endRow: "<required>", //Valid only if customStartEnd is true. Defines the end Row of the data.
    startCol: "<required>", //Valid only if customStartEnd is true. Defines the start Column of the data.
    endCol: "<required>" //Valid only if customStartEnd is true. Defines the end Column of the data.
};

excelMongo.covertToMongo(credentials, options, (callback) => {console.log(callback)}); //returns documents inserted in the database.