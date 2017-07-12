import ClassPostController from '../../controllers/api/Posts.controller'
var express = require('express')
var Route = express.Router()
var PostsController = new ClassPostController()

Route.get('/posts/', PostsController.index)
Route.post('/posts/', PostsController.create)
Route.get('/posts/:id', PostsController.find)
Route.put('/posts/:id', PostsController.update)
Route.delete('/posts/:id', PostsController.delete)

export default Route
