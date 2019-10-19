const db = require('../../db/queries');
const logger = require('../../utils/log');

const _postStudentInfo = (studentInfo, callback) => {
  const info = {
    name: studentInfo.name,
    gender: studentInfo.gender,
    country: studentInfo.country,
    email: studentInfo.email,
  };

  db.insertStudent(info, (err, studentId) => {
    if (err) {
      const errorRes = new Error("Cannot save the student's information.");
      logger.error('Error in [info] controller', errorRes);
      callback(errorRes, null);
    } else {
      callback(null, {
        studentId,
      });
    }
  });
};

const post = (req, res, next) => {
  const studentInfo = {
    name: req.body.name,
    gender: req.body.gender,
    country: req.body.country,
    email: req.body.email,
  };
  _postStudentInfo(studentInfo, (err, studentId) => {
    if (err) {
      return next(err);
    }

    res.locals.data = {
      ...studentId,
      key: process.env.SECRET_KEY,
    };
    return next();
  });
};

module.exports = post;
