const express = require('express');
const bodyParser = require('body-parser');

const logger = require('../utils/log');

const infoController = require('../controllers/info');
const examController = require('../controllers/exam');
const studyController = require('../controllers/study');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

router.post('/info', jsonParser, (req, res) => {
  if (!req.body || !req.body.studentInfo) {
    res.sendStatus(400);
    return;
  }

  const callback = (studentId, err) => {
    if (studentId === null || err) {
      res.sendStatus(500);
      logger.error(err);
      throw err;
    }
    res.json({ studentId });
  };

  infoController.post(req.body.studentInfo, callback);
});

router.get('/study/:lang(en|jp|kr)', (req, res) => {
  const { lang } = req.params;
  const callback = (studyList, err) => {
    if (studyList === null || err) {
      res.sendStatus(500);
      logger.error(err);
      throw err;
    }

    res.json({
      descriptions: studyList.descriptions,
      items: studyList.items,
    });
  };

  studyController.get(lang, callback);
});

router.get('/exam/:examId(1|2|3)-:lang(en|jp|kr)', (req, res) => {
  const { examId, lang } = req.params;
  const callback = (exams, err) => {
    if (exams === null || err) {
      res.sendStatus(500);
      logger.error(err);
      throw err;
    }

    res.json({
      descriptions: exams.descriptions,
      questions: exams.questions,
    });
  };

  examController.get(examId, lang, callback);
});

router.post('/exam/:examId(1|2|3)-:lang(en|jp|kr)', jsonParser, (req, res) => {
  const { examId, lang } = req.params;
  const callback = (examScore, err) => {
    if (examScore === null || err) {
      res.sendStatus(500);
      logger.error(err);
      throw err;
    }

    res.json({ score: examScore });
  };

  examController.post(examId, lang, req.body, callback);
});

module.exports = router;
