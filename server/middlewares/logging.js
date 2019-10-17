const logger = require('../utils/log');

const logReq = (req, res, next) => {
  logger.info(`[${req.method} ${req.url}] Params: ${JSON.stringify(req.params)}`);
  next();
};

// eslint-disable-next-line no-unused-vars
const logError = (err, req, res, next) => {
  logger.error('Error in [logging] middleware', err);
  if (!res.headersSent) {
    res.status(err.httpStatusCode || 500).send(err.message);
  }
};

module.exports = {
  logReq,
  logError,
};
