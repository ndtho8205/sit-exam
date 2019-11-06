const path = require('path');
const csv = require('fast-csv');
const { Pool } = require('pg');

const config = require('../../config');

const pool = new Pool(config.db.postgres);

const get = (examId, lang, callback) => {
  const exam = {
    descriptions: [],
    questions: [],
    solutions: {},
  };

  const csvPath = path.resolve(`${config.db.csv}/exam_${examId}_${lang}.csv`);
  csv
    .parseFile(csvPath, {
      headers: ['explain', 'question', 'solution', 'a', 'b', 'c', 'd'],
      renameHeaders: true,
    })
    .on('error', (err) => callback(err, null))
    .on('data', (row) => {
      if (row.explain.trim()) {
        exam.descriptions.push(row.explain.trim());
      }
      exam.questions.push({
        question: row.question,
        options: [row.a, row.b, row.c, row.d],
      });
      exam.solutions[exam.questions.length] = row.solution.toUpperCase();
    })
    .on('end', () => {
      callback(null, exam);
    });
};

const put = (examId, data, callback) => {
  pool.query(
    `UPDATE exam SET exam${examId}_answers = $1, exam${examId}_score = $2, exam${examId}_rating= $3 WHERE id = $4`,
    [data.answers, data.score, data.rating, data.studentId],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    },
  );
};

module.exports = {
  get,
  put,
};
