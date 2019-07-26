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
  const studentInfo = {
    name: req.body.studentInfo.name,
    gender: req.body.studentInfo.gender,
    country: req.body.studentInfo.country,
    email: req.body.studentInfo.email,
  };
  if (studentInfo.name === undefined || studentInfo.gender === undefined
    || studentInfo.country === undefined || studentInfo.email === undefined) {
    res.sendStatus(400);
    return;
  }

  const callback = (studentId, err) => {
    if (studentId === null || err) {
      res.sendStatus(500);
      logger.error(err);
      return;
      // throw err;
    }
    if (!res.headersSent) {
      res.json({ studentId });
    }
  };

  infoController.post(studentInfo, callback);
});

router.get('/study/:lang(en|jp|kr)', (req, res) => {
  const { lang } = req.params;
  const callback = (studyList, err) => {
    if (studyList === null || err) {
      res.sendStatus(500);
      logger.error(err);
      return;
      // throw err;
    }
    if (!res.headersSent) {
      res.json({
        descriptions: studyList.descriptions,
        items: studyList.items,
      });
    }
  };

  studyController.get(lang, callback);
});

router.get('/exam/:examId(1|2|3)-:lang(en|jp|kr)', (req, res) => {
  const { examId, lang } = req.params;
  const callback = (exams, err) => {
    if (exams === null || err) {
      res.sendStatus(500);
      logger.error(err);
      return;
      // throw err;
    }
    if (!res.headersSent) {
      res.json({
        descriptions: exams.descriptions,
        questions: exams.questions,
      });
    }
  };

  examController.get(examId, lang, callback);
});

router.post('/exam/:examId(1|2|3)-:lang(en|jp|kr)', jsonParser, (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
    return;
  }
  const data = {
    studentId: req.body.studentId,
    answers: req.body.answers,
  };
  if (data.studentId === undefined || data.answers === undefined) {
    res.sendStatus(400);
    return;
  }

  const { examId, lang } = req.params;
  const callback = (examScore, err) => {
    if (examScore === null || err) {
      res.sendStatus(500);
      logger.error(err);
      return;
      // throw err;
    }
    if (!res.headersSent) {
      res.json({ score: examScore });
    }
  };

  examController.post(examId, lang, data, callback);
});

module.exports = router;
