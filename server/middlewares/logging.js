const logger = require('../utils/log');
const { handleError } = require('../utils/error.js');

const logReq = (req, res, next) => {
  logger.info(`[${req.method} ${req.url}] Params: ${JSON.stringify(req.params)}`);
  return next();
};

// eslint-disable-next-line no-unused-vars
const logError = (err, req, res, next) => {
  logger.error(err);
  handleError(err, res);
};

module.exports = {
  logReq,
  logError,
};
