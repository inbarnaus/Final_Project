
const pdf_scanner = require('../../../Server/FileHandlers/Pdf_Scanner.js').parse_pdf;

test('pdf scanner test', async ()=>{
    pdf_path = 'Server/FileHandlers/files/sample.pdf';
    rows = await pdf_scanner(pdf_path);
    console.log(rows);
    // expect(rows).toStrictEqual( [
    //     [ 1, 112, 2, 2, 2, 70, null, 10, 5, 1, 1, 12, null, 1200000, 900000, null, null, null, null ],
    //     [ 2, 112, 3, 2, 3, 70, null, 10, 5, 2, 2, 23, null, 1200000, 900000, null, null, null, null ],
    //     [ 3, 112, 4, 5, 2, 70, null, 10, 5, 5, 1, 34, null, 1200000, 900000, null, null, null, null ],
    //     [ 4, 112, 1, 4, 2, 70, null, 10, 5, 4, 1, 13, null, 1200000, 900000, null, null, null, null ],
    //     [ 5, 112, 2, 3, 4, 90, null, 10, 5, 2, 1, 15, null, 1200000, 900000, null, null, null, null ],
    //     [ 6, 112, 3, 3, 3, 80, null, 10, 5, 1, 2, 24, null, 1200000, 900000, null, null, null, null ]
    //  ]);
});

