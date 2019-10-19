const secure = require('../utils/secure');
const logger = require('../utils/log');
const { ServerError } = require('../utils/error');

const encrypt = (req, res, next) => {
  try {
    const encrypted = secure.encrypt(JSON.stringify(res.locals.data));
    res.json({ data: encrypted });
  } catch (err) {
    logger.error('middleware.encrypt.failed', err);
    return next(new ServerError('Response encryption failed.'));
  }
};

module.exports = encrypt;
