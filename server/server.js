const config = require('./config');
const logger = require('./helpers/logger');
const app = require('./app');

if (!module.parent) {
  app.listen(config.port, (err) => {
    if (err) {
      logger.error(err);
      process.exit(1);
      return;
    }
    logger.info(`Server is listening on port ${config.port}`);
  });
}
