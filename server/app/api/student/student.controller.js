const config = require('../../config');
const services = require('./student.services');

const post = (req, res, next) => {
  const studentInfo = {
    name: req.body.name,
    gender: req.body.gender,
    country: req.body.country,
    email: req.body.email,
  };
  services.post(studentInfo, (err, studentId) => {
    if (err) {
      return next(err);
    }

    res.locals.data = {
      ...studentId,
      key: config.secretKey,
    };
    return next();
  });
};

module.exports = {
  post,
};
