import Validator from './base/validator.js';

class PostValidator extends Validator
{
    constructor(data){
        super();


        this.rules = {
            title : 'required',
            description : 'required',
        }

        this.messages = {
            title : {
                required : 'Es campo title es requerido'
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
        let validate = new PostValidator(data);
        return validate.exec()
    }
}

export default PostValidator;