const db = require('../../db/queries');
const logger = require('../../utils/log');
const { DatabaseError } = require('../../utils/error');

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
  db.selectExam(examId, lang, (err, { solutions }) => {
    if (err) {
      logger.error('controller.exam.post.failed', err);
      callback(new DatabaseError("Cannot save the student's answers."), null);
    } else {
      const newData = {
        ...data,
        score: _computeScore(solutions, data.answers),
      };

      db.updateStudentExam(examId, newData, (updateError) => {
        if (updateError) {
          logger.error('controller.exam.post.failed', err);
          callback(new DatabaseError('Cannot save the student\'s answers.'), null);
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

  const { examId, lang } = req.params;
  _postAnswer(examId, lang, data, (err, score) => {
    if (err) {
      return next(err);
    }

    res.locals.data = score;
    return next();
  });
};

module.exports = post;
