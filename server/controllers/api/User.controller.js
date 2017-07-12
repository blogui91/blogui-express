import BaseController from '../Base.controller'
import UserRepository from '../../repositories/User.repository'

class UsersController extends BaseController{
    constructor(){
        super(new UserRepository());
    }
}

export default UsersController;