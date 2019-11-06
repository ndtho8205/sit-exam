const winston = require('winston');

const config = require('../config');

const transports = [];
if (process.env.NODE_ENV !== 'production') {
  transports.push(
    new winston.transports.Console({
      silent: config.winston.silent,
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.simple(),
      ),
    }),
  );
} else {
  transports.push(
    ...[
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        handleExceptions: true,
        format: winston.format.timestamp(),
      }),
      new winston.transports.File({
        filename: 'logs/combined.log',
        handleExceptions: true,
        format: winston.format.timestamp(),
      }),
    ],
  );
}

const logger = winston.createLogger({
  level: config.winston.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports,
});

module.exports = logger;
