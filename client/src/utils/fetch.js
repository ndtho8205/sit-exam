const axios = require('axios');

const fetch = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL || 'http://localhost:3000/api/',
  timeout: 1000,
  headers: {
    // Authorization: '',
    'Content-Type': 'application/json',
  },
});

const postStudentInfo = (studentInfo, callback) => {
  fetch
    .post('/info', {
      studentInfo,
    })
    .then(res => callback(res, null))
    .catch((err) => {
      callback(null, err);
    });
};

const getExam = (examId, lang, callback) => {
  fetch
    .get(`/exam/${examId}-${lang}`)
    .then(res => callback(res, null))
    .catch((err) => {
      callback(null, err);
    });
};

const postAnswer = (examId, lang, data, callback) => {
  fetch
    .post(`/exam/${examId}-${lang}`, {
      studentId: data.studentId,
      answers: data.answers,
    })
    .then(res => callback(res, null))
    .catch((err) => {
      callback(null, err);
    });
};

const getStudyList = (lang, callback) => {
  fetch
    .get(`/study/${lang}`)
    .then(res => callback(res, null))
    .catch((err) => {
      callback(null, err);
    });
};

module.exports = {
  fetch,
  postStudentInfo,
  getExam,
  postAnswer,
  getStudyList,
};
