const db = require('../../db/queries');
const logger = require('../../utils/log');

const _getExam = (examId, lang, callback) => {
  db.selectExam(examId, lang, (err, exam) => {
    if (err) {
      const errorRes = new Error('Cannot get the exam.');
      logger.error('Error in [exam] controller', errorRes);
      callback(errorRes, null);
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
