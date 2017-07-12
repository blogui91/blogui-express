class BaseController 
{
    constructor(repository){
        this.repository = repository
        this.bindFunctions(this, ["index", "find", "update", "delete","create"]);
    }

    bindFunctions(context, methodNames) {
        methodNames.map(function(methodName) {
            context[methodName] = context[methodName].bind(context);
        });
    };

    async index(req, res){
        try{
            let operation = await this.repository.findAll();
            res.status(200).json(operation)
        }catch(error){
            console.log("error ",error)
            throw error
        }
    }

    async find(request, response){
        let id = request.params.id;
        try{
            let operation = await this.repository.find(id);
            response.status(200).json(operation)
        }catch(error){
            throw error
        }
    }

    async update(request,response){
        let id = request.params.id
        try{
            let operation = await this.repository.update(id, request.body);
            response.status(200).json(operation)
        }catch(error){
            response.status(500).json(error)
        }
    }

    async delete(request, response){
        let id = request.params.id;
        try{
            let operation = await this.repository.delete(id);
            response.status(200).json(operation)
        }catch(error){
            response.status(500).json(error)
        }
    }

    async create(request , response){
        let body = request.body

        console.log(request.body)
        try{
            let operation = await this.repository.create(body);
            return response.status(202).json(operation)     
        }catch(error){
            return response.status(500).json(error)     
        }
    }

}

export default BaseController