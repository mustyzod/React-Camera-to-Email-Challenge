const express = require('express');
const router = express.Router();

const SendMailController = require('../../controllers/SendMail.controller');

//  @route  POST /api/
//  @desc   Send Picture to mail
//  @access Public 
router.post('/upload', SendMailController.postSendEmail);

module.exports = router;