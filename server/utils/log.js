const winston = require('winston');

const {
  combine, colorize, splat, simple,
} = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      silent: process.env.NODE_ENV === 'test',
      format: combine(winston.format.errors({ stack: true }), colorize(), splat(), simple()),
    }),
  );
}

module.exports = logger;
