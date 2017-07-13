import ClassPostController from '../../controllers/api/Posts.controller'
var express = require('express')
var Route = express.Router()
var PostsController = new ClassPostController()

import User from '../../models/UserModel'
Route.get('/test/', async (req, res) =>{
    try{
        let a = await User.findById(2)
        res.status(200).json(a)
    }catch(error){
        console.log(error)
        res.status(500).json({
            error : "Error!"
        })
    }

    
    // User.findById(2, function(err, user){
    //     console.log(user)
    //     if(user){
    //         res.status(200).json({
    //             user
    //         })
    //     }
    // })
});

Route.get('/posts/', PostsController.index)
Route.post('/posts/', PostsController.create)
Route.get('/posts/:id', PostsController.find)
Route.put('/posts/:id', PostsController.update)
Route.delete('/posts/:id', PostsController.delete)

export default Route
