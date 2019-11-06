const logger = require('../helpers/logger');

const logReq = (req, res, next) => {
  logger.info(
    `[${req.method} ${req.url}] Params: ${JSON.stringify(req.params)}`,
  );
  return next();
};

// eslint-disable-next-line no-unused-vars
const logError = (err, req, res, next) => {
  logger.error(err);

  if (!res.headersSent) {
    return res.status(err.statusCode || 500).json({
      error: {
        name: err.name,
        statusCode: err.statusCode || 500,
        messages: err.messages || [err.message],
      },
    });
  }
};

module.exports = {
  logReq,
  logError,
};
