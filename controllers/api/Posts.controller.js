var BaseController = require('../Base.controller')
var PostRepository = require('../../repositories/Post.repository')

class PostsController extends BaseController{
    constructor(){
        super(new PostRepository());
    }
}

module.exports = PostsController;