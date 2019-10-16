const logger = require('../utils/log');

const logReq = (req, res, next) => {
  logger.info(req.url);
  next();
};

const logError = (err, req, res) => {
  logger.error('Error in [logging] middleware', err);
  if (!res.headersSent) {
    res.status(err.httpStatusCode || 500).send(err.message);
  }
};

module.exports = {
  logReq,
  logError,
};
