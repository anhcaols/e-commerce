const express = require('express');
const app = express();
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db
require('./dbs/init.mongodb');
const {checkOverload} = require('./helpers/check.connect');
checkOverload();

// init routers
app.use('/', require('./routers'));
// handling error

module.exports = app;