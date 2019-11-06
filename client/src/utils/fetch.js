const axios = require('axios');

const secure = require('./secure');

const fetch = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 3000,
  headers: {
    // Authorization: '',
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (message) => {
      const encryptedData = {
        data: secure.encrypt(JSON.stringify(message)),
      };
      return JSON.stringify(encryptedData);
    },
  ],
  transformResponse: [
    (data) => {
      const json = JSON.parse(data);
      const decryptedData = secure.decrypt(json.data);
      return JSON.parse(decryptedData);
    },
  ],
});

const postStudentInfo = (studentInfo, callback) => {
  fetch
    .post('/student', {
      ...studentInfo,
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
      rating: data.rating,
    })
    .then(res => callback(res, null))
    .catch((err) => {
      callback(null, err);
    });
};

const getStudyList = (lang, callback) => {
  fetch
    .get(`/studyList/${lang}`)
    .then(res => callback(res, null))
    .catch((err) => {
      callback(null, err);
    });
};

export default {
  fetch,
  postStudentInfo,
  getExam,
  postAnswer,
  getStudyList,
};
