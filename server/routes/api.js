const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

router.get('/test/:testId(\\d)', (req, res) => {
  res.json({ message: `Get test ${req.params.testId}` });
});

router.get('/score/:testId(\\d)', (req, res) => {
  res.json({ message: `Get score ${req.params.testId}` });
});

module.exports = router;
