const path = require('path');
const csv = require('fast-csv');

const config = require('../../config');

const get = (lang, callback) => {
  const studyList = {
    descriptions: [],
    items: [],
  };

  const csvPath = path.resolve(`${config.db.csv}/study_${lang}.csv`);
  csv
    .parseFile(csvPath, { headers: ['explain', 'item'], renameHeaders: true })
    .on('error', (err) => callback(err, null))
    .on('data', (row) => {
      if (row.explain.trim()) {
        studyList.descriptions.push(row.explain.trim());
      }
      if (row.item.trim()) {
        studyList.items.push(row.item.trim());
      }
    })
    .on('end', () => {
      callback(null, studyList);
    });
};

module.exports = {
  get,
};
