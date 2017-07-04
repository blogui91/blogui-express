let BaseRepository = require('./Base.repository');
let PostValidator = require('../validators/Post.validator')
class PostRepository extends BaseRepository
{
    constructor(){
        super('posts', PostValidator)
    }
}

module.exports = PostRepository