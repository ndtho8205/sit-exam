const secure = require('../utils/secure');
const logger = require('../utils/log');

const decrypt = (req, res, next) => {
  const errorRes = new Error('Invalid requested.');
  errorRes.httpStatusCode = 400;

  if (!req.body || !req.body.data) {
    next(errorRes);
    return;
  }

  try {
    const decrypted = secure.decrypt(req.body.data);
    req.body = JSON.parse(decrypted);
    next();
  } catch (err) {
    logger.error('Error in [decrypt] middleware', err);
    next(errorRes);
  }
};

module.exports = decrypt;
