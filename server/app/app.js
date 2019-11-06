const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const config = require('./config');
const logMiddleware = require('./middlewares/log');

const app = express();

app.use(helmet());
app.use(cors(config.cors));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logMiddleware.logReq);

app.use(express.static('public'));
app.use(config.api.prefix, require('./api/api.routes'));

app.use(logMiddleware.logError);

module.exports = app;
