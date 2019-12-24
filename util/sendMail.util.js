const nodemailer = require('nodemailer');
const util = require('util');
const fs = require('fs');
const config = require('../config');
// console.log(config.mailUSERNAME);
nodemailer.sendmail = true;
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
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };
        this.mailSender = util.promisify(this.transporter.sendMail.bind(this.transporter));
    }

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
        // fs.unlinkSync(file.path);
        fs.unlinkSync(fileName);
    }
}

module.exports = SendMail;