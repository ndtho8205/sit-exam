const express = require('express');

const decrypt = require('../../middlewares/decrypt');
const encrypt = require('../../middlewares/encrypt');
const validator = require('../../middlewares/validate');

const controller = require('./exam.controller');

const router = express.Router();

router.get('/:examId(1|2|3)-:lang(en|jp|kr)', [controller.get, encrypt]);

router.post('/:examId(1|2|3)-:lang(en|jp|kr)', [
  decrypt,
  validator.examAnswersValidationRules,
  validator.validate,
  controller.post,
  encrypt,
]);

module.exports = router;
