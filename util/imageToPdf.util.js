const fs = require('fs');
const PDFDocument = require('pdfkit');

const imageToPdf = async file => {
    const doc = new PDFDocument;

    const pdfFile = file.path + file.name + '.pdf';
    doc.pipe(fs.createWriteStream(pdfFile));
    doc.text('MieterEngel coding challenge!', 100, 100);
    doc.image(file.image, {
        fit: [250, 300],
        align: 'center',
        valign: 'center'
    });
    await doc.end();
    fs.unlinkSync(file.image); //delete the image
}

module.exports = imageToPdf;