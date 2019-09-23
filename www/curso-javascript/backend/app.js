'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app =  express();

// cargar archivos de Rutas
var project_routes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cors

// rutas
app.use('/api', project_routes);

// exporta

module.exports = app;
