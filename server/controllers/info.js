const db = require('../db/queries');

const post = (studentInfo, callback) => {
  const info = {
    name: studentInfo.name,
    gender: studentInfo.gender,
    country: studentInfo.country,
    email: studentInfo.email,
  };
  db.insertStudent(info, callback);
};

module.exports = {
  post,
};
