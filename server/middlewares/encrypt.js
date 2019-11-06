const cipher = require('../helpers/cipher');
const logger = require('../helpers/logger');
const { ServerError } = require('../helpers/error');

const encrypt = (req, res, next) => {
  try {
    const encrypted = cipher.encrypt(JSON.stringify(res.locals.data));
    res.json({ data: encrypted });
  } catch (err) {
    logger.error('middleware.encrypt.failed', err);
    return next(new ServerError('Response encryption failed.'));
  }
};

module.exports = encrypt;
