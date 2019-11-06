require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  port: parseInt(process.env.PORT, 10),
  api: {
    prefix: '/api',
  },
  secretKey: process.env.SECRET_KEY,
  cors: {
    origin: process.env.ALLOW_ORIGIN,
  },
  postgres: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DATABASE,
  },
  winston: {
    level: process.env.LOG_LEVEL || 'info',
    silent: process.env.NODE_ENV === 'test',
  },
};

module.exports = config;
