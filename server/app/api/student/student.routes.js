const express = require('express');

const decrypt = require('../../middlewares/decrypt');
const encrypt = require('../../middlewares/encrypt');
const validator = require('../../middlewares/validate');

const controller = require('./student.controller');

const router = express.Router();

router.post('/', [
  decrypt,
  validator.studentInfoValidationRules,
  validator.validate,
  controller.post,
  encrypt,
]);

module.exports = router;
