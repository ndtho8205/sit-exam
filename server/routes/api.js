const express = require('express');

const encrypt = require('../middlewares/encrypt');

const infoController = require('../controllers/info/info.controller');
const examController = require('../controllers/exam/exam.controller');
const studyController = require('../controllers/study/study.controller');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is running.' });
});

router.post('/info', [infoController.post, encrypt]);

router.get('/study/:lang(en|jp|kr)', [studyController.get, encrypt]);

router.get('/exam/:examId(1|2|3)-:lang(en|jp|kr)', [examController.get, encrypt]);

router.post('/exam/:examId(1|2|3)-:lang(en|jp|kr)', [
  examController.post,
  encrypt,
]);

module.exports = router;
