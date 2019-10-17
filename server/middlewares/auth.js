const logger = require('../utils/log');

const auth = (req, res, next) => {
  const errorRes = new Error('Invalid requested.');
  errorRes.httpStatusCode = 400;

  if (!req.body || !req.body.studentId) {
    logger.error('Error in [auth] middleware: studentId not found.');
    next(errorRes);
  }

  next();
};

module.exports = auth;
