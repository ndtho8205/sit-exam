const path = require('path');
const csv = require('fast-csv');
const { Pool } = require('pg');


const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DATABASE,
});


const selectExam = (examId, lang, callback) => {
  const exam = {
    descriptions: [],
    questions: [],
    solutions: {},
  };

  const csvPath = path.resolve(`${__dirname}/csv/exam_${examId}_${lang}.csv`);
  csv.parseFile(csvPath, { headers: ['explain', 'question', 'solution', 'a', 'b', 'c', 'd'], renameHeaders: true })
    .on('error', (err) => callback(null, err))
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
      callback(exam, null);
    });
};

const selectStudyList = (lang, callback) => {
  const studyList = {
    descriptions: [],
    items: [],
  };

  const csvPath = path.resolve(`${__dirname}/csv/study_${lang}.csv`);
  csv.parseFile(csvPath, { headers: ['explain', 'item'], renameHeaders: true })
    .on('error', (err) => callback(null, err))
    .on('data', (row) => {
      if (row.explain.trim()) {
        studyList.descriptions.push(row.explain.trim());
      }
      if (row.item.trim()) {
        studyList.items.push(row.item.trim());
      }
    })
    .on('end', () => {
      callback(studyList, null);
    });
};

const insertStudent = (studentInfo, callback) => {
  pool.query(
    'INSERT INTO exam (name, gender, country, email, time) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [studentInfo.name, studentInfo.gender, studentInfo.country, studentInfo.email,
      new Date().getTime()],
    (err, results) => {
      if (err) {
        callback(null, err);
        return;
      }
      const studentId = results.rows[0].id;
      callback(studentId, null);
    },
  );
};

const updateStudentExam = (examId, data, callback) => {
  pool.query(
    `UPDATE exam SET exam${examId}_answers = $1, exam${examId}_score = $2, exam${examId}_rating= $3 WHERE id = $4`,
    [data.answers, data.score, data.rating, data.studentId],
    (err) => {
      if (err) {
        callback(err);
        return;
      }

      callback(null);
    },
  );
};

module.exports = {
  selectExam,
  selectStudyList,
  insertStudent,
  updateStudentExam,
};
