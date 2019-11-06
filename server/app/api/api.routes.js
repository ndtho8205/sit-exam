const express = require('express');

const { NotFoundError } = require('../helpers/error');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ messages: ['API is running.'] });
});

router.use('/exam', require('./exam/exam.routes'));
router.use('/student', require('./student/student.routes'));
router.use('/studyList', require('./studyList/studyList.routes'));

router.get('/*', (req, res, next) => {
  next(new NotFoundError());
});

module.exports = router;
