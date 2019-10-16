const db = require('../../db/queries');
const logger = require('../../utils/log');

const _getStudyList = (lang, callback) => {
  db.selectStudyList(lang, (err, studyList) => {
    if (err) {
      const errorRes = new Error('Cannot get the list.');
      logger.error('Error in [study] controller', errorRes);
      callback(errorRes, null);
    } else {
      callback(null, studyList);
    }
  });
};

const get = (req, res, next) => {
  const { lang } = req.params;
  _getStudyList(lang, (err, studyList) => {
    if (err) {
      next(err);
    } else {
      // res.json(studyList);
      res.locals.data = studyList;
      next();
    }
  });
};

module.exports = get;
