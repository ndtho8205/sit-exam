const secure = require('../utils/secure');
const logger = require('../utils/log');

const decrypt = (req, res, next) => {
  if (req.method === 'GET') {
    return next();
  }

  const errorRes = new Error('Invalid requested.');
  errorRes.httpStatusCode = 400;

  if (!req.body || !req.body.data) {
    logger.error('Error in [decrypt] middleware', errorRes);
    return next(errorRes);
  }

  try {
    const decrypted = secure.decrypt(req.body.data);
    req.body = JSON.parse(decrypted);
    return next();
  } catch (err) {
    logger.error('Error in [decrypt] middleware', err);
    return next(errorRes);
  }
};

module.exports = decrypt;
