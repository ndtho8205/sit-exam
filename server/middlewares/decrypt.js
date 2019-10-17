const secure = require('../utils/secure');
const logger = require('../utils/log');

const decrypt = (req, res, next) => {
  if (req.method === 'GET') {
    next();
  } else {
    const errorRes = new Error('Invalid requested.');
    errorRes.httpStatusCode = 400;

    if (!req.body || !req.body.data) {
      next(errorRes);
    } else {
      try {
        const decrypted = secure.decrypt(req.body.data);
        req.body = JSON.parse(decrypted);
        next();
      } catch (err) {
        logger.error('Error in [decrypt] middleware', err);
        next(errorRes);
      }
    }
  }
};

module.exports = decrypt;
