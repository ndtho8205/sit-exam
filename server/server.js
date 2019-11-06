const config = require('./app/config');
const logger = require('./app/helpers/logger');
const app = require('./app/app');

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
