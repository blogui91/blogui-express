import BaseController from '../Base.controller'
import PostRepository from '../../repositories/Post.repository'
class PostsController extends BaseController{
    constructor(){
        super(new PostRepository())
    }
}
export default PostsController
