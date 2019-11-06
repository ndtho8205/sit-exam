const express = require('express');

const encrypt = require('../../middlewares/encrypt');

const controller = require('./studyList.controller');

const router = express.Router();

router.get('/:lang(en|jp|kr)', [controller.get, encrypt]);

module.exports = router;
