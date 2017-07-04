let BaseRepository = require('./Base.repository');
let UserValidator = require('../validators/User.validator')
class UserRepository extends BaseRepository
{
    constructor(){
        super('users', UserValidator)
    }
}

module.exports = UserRepository