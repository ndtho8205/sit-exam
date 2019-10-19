require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const loggingMiddleware = require('./middlewares/logging');
const decryptMiddleware = require('./middlewares/decrypt');
const logger = require('./utils/log');

const { PORT, ALLOW_ORIGIN } = process.env;

const app = express();

app.use(helmet());
app.use(cors({ origin: ALLOW_ORIGIN }));

app.use(express.static('public'));
app.use(loggingMiddleware.logReq);
app.use(bodyParser.json());
app.use(decryptMiddleware);

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

app.use(loggingMiddleware.logError);

app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
