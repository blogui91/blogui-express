var Models  = require('../models');
var express = require('express');
var Route  = express.Router();

var ClassPostController = require('../controllers/api/Posts.controller');
var PostsController = new ClassPostController();

Route.get('/posts/', PostsController.index);
Route.post('/posts/', PostsController.create);
Route.get('/posts/:id', PostsController.find);
Route.put('/posts/:id', PostsController.update);
Route.delete('/posts/:id',PostsController.delete);

module.exports = Route;