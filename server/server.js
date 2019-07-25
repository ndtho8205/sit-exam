require('dotenv').config();

const express = require('express');
const cors = require('cors');

const logger = require('./utils/log');
const loggingMiddleware = require('./middlewares/logging');

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.static('public'));
app.use(loggingMiddleware.logReq);
app.use(loggingMiddleware.logError);

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
});
