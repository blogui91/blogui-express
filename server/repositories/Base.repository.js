class Repository
{
    constructor(model, validator){
        this.model = model
        this.validator = validator
    }

    createModel(){
        return this.model
    }

    createAndFill(body){
        return new this.model(body)
    }

    async create(body){
        let validator = this.validator.make(body);
        let response = {
            validator : validator,
            resource : null
        }
        if(validator.passes()){
            try{
                let resource = this.createAndFill(body);
                console.log("Resource:   ", body)
                //let transaction = await this.createModel().create(body)
                let transaction = await resource.save();
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
            let query = await this.createModel().findOne({
                 _id: id
            });
            return query
        }catch(error){
            console.log("error ",error)
            throw error
        }
    }

    async findAll(){
        try {
            let query = await this.createModel().find({ });
            return query
        }catch(error){
            console.log(error)
            throw error
        }
    }

    async update(id, data){
        try{
            let transaction = await this.createModel().update({ _id: id }, data);
            return transaction;
        }catch(error){
            console.log("error ",error)
            throw error
        }
    }

    async delete(id){
        try{
            let transaction = await this.createModel().remove({
                _id : id
            })
            return transaction;
        }catch(error){
            return error;
        }
    }

}
export default Repository
