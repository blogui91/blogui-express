import BaseRepository from './Base.repository'
import UserValidator from '../validators/User.validator'
import UserModel from '../models/UserModel'

class UserRepository extends BaseRepository
{
    constructor(){
        super(UserModel, UserValidator)
    }
}

export default UserRepository