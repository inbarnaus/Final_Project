var pdfreader = require("../node_modules/pdfreader");
var fs = require("fs");
var pdfr2 = require("pdfreader").PdfReader;
 
var rows = {}; // indexed by y-position
 
function printRows() {
  Object.keys(rows) // => array of y-positions (type: float)
    .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
    .forEach(y => console.log((rows[y] || []).join("")));
}
// console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
// new pdfreader.PdfReader().parseFileItems('Files/sample.pdf', function(err,item) {
//   if (!item || item.page) {
//     // end of file, or page
//     printRows();
//     //console.log("PAGE:", item.page);
//     rows = {}; // clear rows for next page
//   } else if (item.text) {
//     // accumulate text items into rows object, per line
//     console.log(item);
//     (rows[item.x] = rows[item.x] || []).push(item.text);// x- each column, y-each row
//   }
// });

const Scanner = {
  parse_pdf : async (file) => {
    let pdfReader = new pdfreader.PdfReader();
    console.log(file);
    
    let item = await pdfReader.parseFileItems(file);
      
      // console.log(err);
      console.log(item);
      console.log(item.text);
      if (!item || item.page) {
        // end of file, or page
        printRows(rows);
        console.log("PAGE:", item.page);
        rows = {}; // clear rows for next page
      } else if (item.text) {
        // accumulate text items into rows object, per line
        console.log(item);
        (rows[item.y] = rows[item.y] || []).push(item.text);// x- each column, y-each row
      }
    
    console.log(rows);
    return item;
  }

  // parse_pdf2: async (path) => {
  //   fs.readFile(path, (err, pdfBuffer) => {
  //     new pdfr2().parseBuffer(pdfBuffer, function(err, item){
  //       // console.log(item);
  //       if (err)
  //           console.log(err);
  //        else if (!item)
  //            console.log("no item");
  //         else if (item.text)
  //            console.log(item.text);
  //          });
  //   });
  // }
}

module.exports = Scanner;