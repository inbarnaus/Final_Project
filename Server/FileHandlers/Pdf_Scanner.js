const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync("C:/Users/itays/OneDrive/Desktop/school/Final_Project/Final_Project/Server/FileHandlers/files/sample.pdf");
    console.log(dataBuffer);
    let res = null;
    pdf(dataBuffer).then(function(data) {
        res = data;
        console.log(data);
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
            
    }).catch((err)=>{console.log(err);});


const Scanner = {
  parse_pdf : async (file) => {
    console.log(file);
    let dataBuffer = fs.readFileSync(file);
    console.log(dataBuffer);
    let res = null;
    pdf(dataBuffer).then(function(data) {
        res = data;
        console.log(data);
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
            
    }).catch(function(err){
      console.log(err);
    });
    console.log(res);
    return res;
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