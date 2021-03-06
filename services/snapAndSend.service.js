const base64ToPdf = require('../util/base64ToPdf.util');
const SendMail = require('../util/sendMail.util');

const mailer = new SendMail();

const snapAndSend = async (base64Data) => {
    const pdf = await base64ToPdf(base64Data);
    await mailer.sendMail(pdf);
    return Promise.resolve('Success');
}

module.exports = snapAndSend;