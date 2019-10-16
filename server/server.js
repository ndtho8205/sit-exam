require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const loggingMiddleware = require('./middlewares/logging');
const logger = require('./utils/log');

const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(cors());

app.use(express.static('public'));
app.use(loggingMiddleware.logReq);

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

app.use(loggingMiddleware.logError);

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
});
