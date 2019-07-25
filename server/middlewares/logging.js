const logger = require('../utils/log');

const logReq = (req, res, next) => {
  logger.info(req.url);
  next();
};

const logError = (err, req, res, next) => {
  logger.error(err);
  next();
};

module.exports = {
  logReq,
  logError,
};
