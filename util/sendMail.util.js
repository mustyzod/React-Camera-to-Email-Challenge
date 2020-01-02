const nodemailer = require('nodemailer');
const util = require('util');
const fs = require('fs');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const config = require('../config');

nodemailer.sendmail = true;
class SendMail {
    constructor() {
        this.transporter = nodemailer.createTransport(
            sendgridTransport({
                auth: {
                    api_user: config.SENDGRID_USERNAME, // SG username
                    api_key: config.SENDGRID_PASSWORD, // SG password
                },
            })
        );
        this.mailOptions = {
            from: config.mailFrom,
            to: config.mailTo,
            subject: 'MieterEngel coding challenge - Sodruldeen Mustapha',
            text: 'Please find the attached picture in pdf format'
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
        fs.unlinkSync(fileName); //Delete the pdf after sending email
    }
}

module.exports = SendMail;