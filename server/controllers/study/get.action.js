const db = require('../../db/queries');
const logger = require('../../utils/log');
const { DatabaseError } = require('../../utils/error');

const _getStudyList = (lang, callback) => {
  db.selectStudyList(lang, (err, studyList) => {
    if (err) {
      logger.error('controller.study.get.failed', err);
      callback(new DatabaseError('Cannot get the study list.'), null);
    } else {
      callback(null, studyList);
    }
  });
};

const get = (req, res, next) => {
  const { lang } = req.params;
  _getStudyList(lang, (err, studyList) => {
    if (err) {
      return next(err);
    }

    res.locals.data = studyList;
    return next();
  });
};

module.exports = get;
