const mime = require('mime');
const fs = require('fs').promises;

const base64ToImage = async (file) => {
    var matches = file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};
    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = new Buffer.from(matches[2], 'base64');
    let decodedImg = response;
    let imageBuffer = decodedImg.data;
    let type = decodedImg.type;
    let extension = mime.extension(type);
    let fileName = Date.now();
    const finalImage = {
        name: fileName,
        path: './file/',
        image: './file/' + fileName + '.' + extension,
        imageBuffer
    };
    await fs.writeFile(finalImage.image, imageBuffer);

    return finalImage;
}

module.exports = base64ToImage;