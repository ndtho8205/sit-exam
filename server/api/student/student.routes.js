const express = require('express');

const encrypt = require('../../middlewares/encrypt');
const validator = require('../../middlewares/validate');

const controller = require('./student.controller');

const router = express.Router();

router.post('/', [
  validator.studentInfoValidationRules,
  validator.validate,
  controller.post,
  encrypt,
]);

module.exports = router;
