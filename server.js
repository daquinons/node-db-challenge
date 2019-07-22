const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const services = require('./services');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('combined'));
server.use("/api", services);

module.exports = server;
