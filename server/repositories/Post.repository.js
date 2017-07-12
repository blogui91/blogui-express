import BaseRepository from './Base.repository'
import PostValidator from '../validators/Post.validator'
import PostModel from '../models/post'

class PostRepository extends BaseRepository {
  constructor () {
    super(PostModel, PostValidator)
  }
}

export default PostRepository
