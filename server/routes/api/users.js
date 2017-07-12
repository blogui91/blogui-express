import express from 'express'
import ClassUserController from '../../controllers/api/User.controller'
var Route = express.Router()
var UsersController = new ClassUserController()
Route.get('/users/', UsersController.index)
Route.post('/users/', UsersController.create)
Route.get('/users/:id', UsersController.find)
Route.put('/users/:id', UsersController.update)
Route.delete('/users/:id', UsersController.delete)

export default Route
