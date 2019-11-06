const services = require('./exam.services');

const get = (req, res, next) => {
  const { examId, lang } = req.params;
  services.get(examId, lang, (err, exam) => {
    if (err) {
      return next(err);
    }

    res.locals.data = exam;
    return next();
  });
};

const post = (req, res, next) => {
  const data = {
    studentId: req.body.studentId,
    answers: req.body.answers,
    rating: req.body.rating,
  };

  const { examId, lang } = req.params;
  services.post(examId, lang, data, (err, score) => {
    if (err) {
      return next(err);
    }

    res.locals.data = score;
    return next();
  });
};

module.exports = {
  get,
  post,
};
