var DB  = require('../models');

class Repository
{
    constructor(model, validator){
        this.model = model
        this.validator = validator
    }

    createModel(){
        return DB[this.model]
    }

    async create(body){
        let validator = this.validator.make(body);
        let response = {
            validator : validator,
            resource : null
        }
        if(validator.passes()){
            try{
                let transaction = await this.createModel().create(body)
                response.resource = transaction
                return response
            }catch(error){
                console.log(error)
                return error
            }
        }
        
        return response
        
    }

    async find(id){
        try {
            let query = this.createModel().find({
                where: {
                    id: id
                }
            });
            return query
        }catch(error){
            console.log("error ",error)
            throw error
        }
    }

    async findAll(){
        try {
            console.log(this.createModel())
            let query = this.createModel().findAll({ });
            return query
        }catch(error){
            console.log(error)
            throw error
        }
    }

    async update(id, data){
        try{
            let transaction = this.createModel().update(data,{
                                where: {
                                    id: id
                                }
                            });
            return transaction;
        }catch(error){
            console.log("error ",error)
            throw error
        }
    }

    async delete(id){
        try{
            let transaction = this.createModel().destroy({
                where: {
                    id : id
                }
            })
            return transaction;
        }catch(error){
            return error;
        }
    }

}


module.exports = Repository;