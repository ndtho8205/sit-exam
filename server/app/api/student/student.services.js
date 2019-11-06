const model = require('./student.model');
const logger = require('../../helpers/logger');
const { DatabaseError } = require('../../helpers/error');

const post = (studentInfo, callback) => {
  const info = {
    name: studentInfo.name,
    gender: studentInfo.gender,
    country: studentInfo.country,
    email: studentInfo.email,
  };

  model.insert(info, (err, studentId) => {
    if (err) {
      logger.error('controller.info.post.failed', err);
      callback(
        new DatabaseError("Cannot save the student's information."),
        null,
      );
    } else {
      callback(null, {
        studentId,
      });
    }
  });
};

module.exports = {
  post,
};
