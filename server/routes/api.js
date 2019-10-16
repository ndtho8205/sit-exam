const express = require('express');
const bodyParser = require('body-parser');

const decrypt = require('../middlewares/decrypt');
const encrypt = require('../middlewares/encrypt');

const infoController = require('../controllers/info/info.controller');
const examController = require('../controllers/exam/exam.controller');
const studyController = require('../controllers/study/study.controller');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

router.post('/info', [jsonParser, decrypt, infoController.post, encrypt]);

router.get('/study/:lang(en|jp|kr)', [studyController.get, encrypt]);

router.get('/exam/:examId(1|2|3)-:lang(en|jp|kr)', [examController.get, encrypt]);

router.post('/exam/:examId(1|2|3)-:lang(en|jp|kr)', [
  jsonParser,
  decrypt,
  examController.post,
  encrypt,
]);

module.exports = router;
