const secure = require('../utils/secure');
const logger = require('../utils/log');

const encrypt = (req, res, next) => {
  try {
    const encrypted = secure.encrypt(JSON.stringify(res.locals.data));
    res.json({ data: encrypted });
  } catch (err) {
    logger.error('Error in [encrypt] middleware', err);
    const errorRes = new Error('Internal server error.');
    errorRes.httpStatusCode = 500;
    next(errorRes);
  }
};

module.exports = encrypt;
