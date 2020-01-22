var pdfreader = require("../node_modules/pdfreader");
 
var rows = {}; // indexed by y-position
 
function printRows() {
  Object.keys(rows) // => array of y-positions (type: float)
    .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
    .forEach(y => console.log((rows[y] || []).join("")));
}
 
new pdfreader.PdfReader().parseFileItems('Files/sample.pdf', function(err,item) {
  if (!item || item.page) {
    // end of file, or page
    printRows();
    //console.log("PAGE:", item.page);
    rows = {}; // clear rows for next page
  } else if (item.text) {
    // accumulate text items into rows object, per line
    console.log(item);
    (rows[item.x] = rows[item.x] || []).push(item.text);// x- each column, y-each row
  }
});