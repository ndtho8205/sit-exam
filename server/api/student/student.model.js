const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DATABASE,
});

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
