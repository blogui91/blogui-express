let Validator = require('./base/validator.js');

class UserValidator extends Validator
{
    constructor(data){
        super();


        this.rules = {
            last_name : 'required',
            first_name : 'required',
            email : 'email'
        }

        this.messages = {
            last_name : {
                required : 'Es campo apellido es requerido'
            }
        }

        this.data = data
        this.extend({
            empty(value) {
                value = value
                    ? value.toString()
                    : null
                return value == null || value.length == 0 || value.trim() == '';
            }
        })

    }

    static make(data = {})
    {
        let validate = new UserValidator(data);
        return validate.exec()
    }
}

module.exports = UserValidator;