const model = require('./exam.model');
const logger = require('../../helpers/logger');
const { DatabaseError } = require('../../helpers/error');

const get = (examId, lang, callback) => {
  model.get(examId, lang, (err, exam) => {
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

const _computeScore = (solutions, answers) => {
  let score = 0;
  Object.keys(answers).forEach((key) => {
    if (answers[key] === solutions[key]) {
      score += 4;
    }
  });
  return score;
};

const post = (examId, lang, data, callback) => {
  model.put(examId, lang, (err, { solutions }) => {
    if (err) {
      logger.error('controller.exam.post.failed', err);
      callback(new DatabaseError("Cannot save the student's answers."), null);
    } else {
      const newData = {
        ...data,
        score: _computeScore(solutions, data.answers),
      };

      model.updateStudentExam(examId, newData, (updateError) => {
        if (updateError) {
          logger.error('controller.exam.post.failed', err);
          callback(
            new DatabaseError("Cannot save the student's answers."),
            null,
          );
        } else {
          callback(null, { score: newData.score });
        }
      });
    }
  });
};

module.exports = {
  get,
  post,
};
