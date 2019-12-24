const snapAndSend = require('../services/snapAndSend.service');

exports.postSendEmail = async (req, res, next) => {
    const {
        base64Data
    } = req.body;
    if (!base64Data) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }

    await snapAndSend(base64Data);
    return res.send(base64Data);
    // base64ToImage(base64Data)
    //     .then(image => {
    //         imageToPdf(image)
    //             .then(pdf => {
    //                 console.log(pdf);
    //             });
    //     })
    //     .catch(err => console.log(err))
};