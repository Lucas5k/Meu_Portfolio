const cors = require('cors');
const express = require('express');
const RouterProjects = require('./router/RouterProjects');

const app = express();
app.use(cors());
app.use(express.json());
app.use(RouterProjects);

module.exports = app;