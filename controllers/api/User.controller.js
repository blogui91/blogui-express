var BaseController = require('../Base.controller')
var UserRepository = require('../../repositories/User.repository')

class UsersController extends BaseController{
    constructor(){
        super(new UserRepository());
    }
}

module.exports = UsersController;