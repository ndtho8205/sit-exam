const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const logMiddleware = require('./middlewares/log');
const decryptMiddleware = require('./middlewares/decrypt');

const config = require('./config');

const app = express();

app.use(helmet());
app.use(cors(config.cors));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(decryptMiddleware);
app.use(logMiddleware.logReq);

app.use('/api', require('./api/api.routes'));

app.use(logMiddleware.logError);

module.exports = app;
