const db = require('../../db/queries');
const logger = require('../../utils/log');
const { DatabaseError } = require('../../utils/error');

const _getExam = (examId, lang, callback) => {
  db.selectExam(examId, lang, (err, exam) => {
    if (err) {
      logger.error('controller.exam.get.failed', err);
      callback(new DatabaseError('Cannot get the exam.'), null);
    } else {
      callback(null, {
        descriptions: exam.descriptions,
        questions: exam.questions,
      });
    }
  });
};

const get = (req, res, next) => {
  const { examId, lang } = req.params;
  _getExam(examId, lang, (err, exam) => {
    if (err) {
      return next(err);
    }

    res.locals.data = exam;
    return next();
  });
};

module.exports = get;
