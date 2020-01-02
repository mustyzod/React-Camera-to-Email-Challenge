const fs = require('fs');
const PDFDocument = require('pdfkit');

const base64ToPdf = async (file) => {
    const matches = file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};
    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = new Buffer.from(matches[2], 'base64');

    const doc = new PDFDocument;

    const pdfFile = './temp_file/' + Date.now() + '.pdf';
    doc.pipe(fs.createWriteStream(pdfFile));
    doc.text('MieterEngel coding challenge!', 100, 100);
    await doc.image(response.data, {
        fit: [250, 300],
        align: 'center',
        valign: 'center'
    });
    await doc.end();
    return pdfFile;
}

module.exports = base64ToPdf;