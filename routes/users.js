var Models  = require('../models');
var express = require('express');
var Route  = express.Router();

var ClassUserController = require('../controllers/api/User.controller');
var UsersController = new ClassUserController();

Route.get('/users/', UsersController.index);
Route.post('/users/', UsersController.create);
Route.get('/users/:id', UsersController.find);
Route.put('/users/:id', UsersController.update);
Route.delete('/users/:id',UsersController.delete);

module.exports = Route;