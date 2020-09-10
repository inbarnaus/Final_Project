// const pdfUtil = require('pdf-to-text');

const pdf_info = {
  err: null,
  text: null
}

function change_info(err, data) {
  console.log(pdf_info);
  pdf_info['err'] = err;
  pdf_info['text'] = data;
  console.log(pdf_info);
}

// function wait_for_info(){
//   if(!pdf_info['err'] && !pdf_info['text']){
//     console.log('!');
//     setTimeout(wait_for_info, 250);
//   }
// }

function parse_pdf(path){
  // pdfUtil.pdfToText(path, change_info);
  // // wait_for_info();
  // console.log(pdf_info);
  // return pdf_info;
}

module.exports = parse_pdf;