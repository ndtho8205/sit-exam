const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is running.' });
});

router.use('/exam', require('./exam/exam.routes'));
router.use('/student', require('./student/student.routes'));
router.use('/studyList', require('./studyList/studyList.routes'));

module.exports = router;
