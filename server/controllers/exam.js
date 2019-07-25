const db = require('../db/queries');


const get = (examId, lang, callback) => {
  db.selectExam(examId, lang, callback);
};

const computeScore = (solutions, answers) => {
  let score = 0;
  Object.keys(answers).forEach((key) => {
    if (answers[key] === solutions[key]) {
      score += 1;
    }
  });
  return score;
};


const post = (examId, lang, data, callback) => {
  const scoreCallback = (exams, err) => {
    if (exams === null || err) {
      callback(null, err);

      return;
    }

    const { solutions } = exams;
    const { studentId, answers } = data;
    const score = computeScore(solutions, answers);

    db.updateStudentExam(studentId, examId, answers, score, (error) => {
      if (error) {
        callback(null, error);
      }

      callback(score, null);
    });
  };

  db.selectExam(examId, lang, scoreCallback);
};

module.exports = {
  get,
  post,
};
