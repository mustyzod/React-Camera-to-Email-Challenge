const nodemailer = require('nodemailer');
const util = require('util');
const fs = require('fs');
const config = require('../');

//  Class for sending email
class SendMail {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: config.mailUSERNAME,
                pass: config.mailPASSWORD
            }
        });
        this.mailOptions = {
            from: config.mailUSERNAME,
            to: config.mailTo,
            subject: 'MieterEngel coding challenge!',
            text: 'Coding Challenge - Sodruldeen Mustapha'
        };
        this.mailSender = util.promisify(this.transporter.sendMail.bind(this.transporter));
    }
    //  Send email method
    async sendMail(fileName) {
        const attachment = {
            attachments: [{
                path: fileName,
            }],
        };
        const options = {
            ...this.mailOptions,
            ...attachment
        };

        try {
            await this.mailSender(options);
            this.transporter.close();
        } catch (e) {
            console.log(e);
        }
        fs.unlinkSync(fileName);//Delete the pdf after sending email
    }
}

module.exports = SendMail;