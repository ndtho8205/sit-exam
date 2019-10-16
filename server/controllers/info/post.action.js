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
    name: req.body.studentInfo.name,
    gender: req.body.studentInfo.gender,
    country: req.body.studentInfo.country,
    email: req.body.studentInfo.email,
  };
  if (
    studentInfo.name === undefined
    || studentInfo.gender === undefined
    || studentInfo.country === undefined
    || studentInfo.email === undefined
  ) {
    const errorRes = new Error('Invalid request. Required field is missing.');
    logger.error('Error in [info] controller', errorRes);
    next(errorRes);
  } else {
    _postStudentInfo(studentInfo, (err, studentId) => {
      if (err) {
        next(err);
      } else {
        // res.json(studentId);
        res.locals.data = studentId;
        next();
      }
    });
  }
};

module.exports = post;
