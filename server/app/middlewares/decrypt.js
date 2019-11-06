const cipher = require('../helpers/cipher');
const logger = require('../helpers/logger');
const { RequestError } = require('../helpers/error');

const decrypt = (req, res, next) => {
  if (req.method === 'GET') {
    return next();
  }

  if (!req.body || !req.body.data) {
    return next(new RequestError('Invalid request.'));
  }

  try {
    const decrypted = cipher.decrypt(req.body.data);
    req.body = JSON.parse(decrypted);
    return next();
  } catch (err) {
    logger.error('middleware.decrypt.failed', err);
    return next(new RequestError('Request decryption failed.'));
  }
};

module.exports = decrypt;
