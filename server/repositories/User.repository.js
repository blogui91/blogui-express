import BaseRepository from './Base.repository'
import UserValidator from '../validators/User.validator'
import UserModel from '../models/user'

class UserRepository extends BaseRepository
{
    constructor(){
        super(UserModel, UserValidator)
    }
}

export default UserRepository