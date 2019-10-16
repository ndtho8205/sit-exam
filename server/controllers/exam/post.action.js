const db = require('../../db/queries');
const logger = require('../../utils/log');

const _computeScore = (solutions, answers) => {
  let score = 0;
  Object.keys(answers).forEach((key) => {
    if (answers[key] === solutions[key]) {
      score += 4;
    }
  });
  return score;
};

const _postAnswer = (examId, lang, data, callback) => {
  const errorRes = new Error('Cannot save the student"s answers.');

  db.selectExam(examId, lang, (err, { solutions }) => {
    if (err) {
      logger.error('Error in [exam] controller', errorRes);
      callback(errorRes, null);
    } else {
      const newData = {
        ...data,
        score: _computeScore(solutions, data.answers),
      };

      db.updateStudentExam(examId, newData, (updateError) => {
        if (updateError) {
          logger.error('Error in [exam] controller', errorRes);
          callback(errorRes, null);
        } else {
          callback(null, { score: newData.score });
        }
      });
    }
  });
};

const post = (req, res, next) => {
  const data = {
    studentId: req.body.studentId,
    answers: req.body.answers,
    rating: req.body.rating,
  };

  if (data.studentId === undefined || data.answers === undefined || data.rating === undefined) {
    const errorRes = new Error('Invalid request. Required field is missing.');
    logger.error('Error in [exam] controller', errorRes);
    next(errorRes);
  } else {
    const { examId, lang } = req.params;
    _postAnswer(examId, lang, data, (err, score) => {
      if (err) {
        next(err);
      } else {
        // res.json(score);
        res.locals.data = score;
        next();
      }
    });
  }
};

module.exports = post;