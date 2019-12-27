const snapAndSend = require('../services/snapAndSend.service');

exports.postSendEmail = async (req, res, next) => {
    const {
        base64Data
    } = req.body;

    if (!base64Data) {
        const error = new Error('Please snap a picture');
        error.httpStatusCode = 400;
        return next(error);
    }

    await snapAndSend(base64Data);
    return res.send({
        msg: "successful"
    });
};