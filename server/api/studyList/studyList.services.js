const model = require('./studyList.model');
const logger = require('../../helpers/logger');
const { DatabaseError } = require('../../helpers/error');

const get = (lang, callback) => {
  model.get(lang, (err, studyList) => {
    if (err) {
      logger.error('controller.study.get.failed', err);
      callback(new DatabaseError('Cannot get the study list.'), null);
    } else {
      callback(null, studyList);
    }
  });
};

module.exports = {
  get,
};
