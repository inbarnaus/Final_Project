var fs = require("fs");
const pdf = require('pdf-parse');
 
const Scanner = {
  parse_pdf : async (file) => {
    let res = null;
    let dataBuffer = fs.readFileSync(file, 'utf-8');
    pdf(dataBuffer).then(function(data) {
    
        // number of pages
        console.log(data.numpages);
        // number of rendered pages
        console.log(data.numrender);
        // PDF info
        console.log(data.info);
        // PDF metadata
        console.log(data.metadata); 
        // PDF.js version
        // check https://mozilla.github.io/pdf.js/getting_started/
        console.log(data.version);
        // PDF text
        console.log(data.text); 
        res = data.text;
    }).catch((err) => {if(err){console.log(err);}});
    return res;


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
}

module.exports = Scanner;