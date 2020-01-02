const snapAndSend = require('../services/snapAndSend.service');

exports.postSendEmail = (req, res, next) => {
    const {
        base64Data
    } = req.body;

    if (!base64Data) {
        const error = new Error('Please snap a picture');
        error.httpStatusCode = 400;
        return next(error);
    }

    snapAndSend(base64Data)
        .then(response => {
            res.send(response);
        })
        .catch(error => res.send(error));
};