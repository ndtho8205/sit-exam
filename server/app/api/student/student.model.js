const { Pool } = require('pg');

const config = require('../../config');

const pool = new Pool(config.db.postgres);

const insert = (studentInfo, callback) => {
  pool.query(
    'INSERT INTO exam (name, gender, country, email, time) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [
      studentInfo.name,
      studentInfo.gender,
      studentInfo.country,
      studentInfo.email,
      new Date().getTime(),
    ],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const studentId = results.rows[0].id;
        callback(null, studentId);
      }
    },
  );
};

module.exports = {
  insert,
};
