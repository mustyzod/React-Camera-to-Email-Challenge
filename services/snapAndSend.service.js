const imageToPdf = require('../util/imageToPdf.util');
const base64ToImage = require('../util/base64ToImage.util');
const SendMail = require('../util/sendMail.util');

const mailer = new SendMail();

const snapAndSend = async (base64Data) => {
    try {
        let image = await base64ToImage(base64Data);
        let pdf = await imageToPdf(image);
        await mailer.sendMail(pdf);
        return Promise.resolve();
    } catch (e) {
        console.log(e);
        return Promise.reject(e);
    }
}

module.exports = snapAndSend;