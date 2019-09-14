const db = require('../db/queries');

const get = (lang, callback) => {
  db.selectStudyList(lang, callback);
};

module.exports = {
  get,
};
