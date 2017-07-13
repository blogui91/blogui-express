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
      if (validator.passes()) {
        let self = this
          try {
            //let resource = this.createAndFill(body);
            //let transaction = await this.createModel().create(body)
            let transaction = await new Promise((resolve, reject) => {
              self.createModel().create(body, (err, newResource) =>{
                if(err){
                  reject(err)
                }else{
                  resolve(newResource)
                }
              })
            })
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
            let query = await this.createModel().findById(id);
            return query
        }catch(error){
            console.log("error ",error)
            throw error
        }
    }

    async findAll(){
      let self = this
      try {
        let query = await new Promise( (resolve, reject) =>{
          self.createModel().all((err, list) =>{
            if(err){
              reject(err)
            }else{
              resolve(list)
            }
          })
        })
        return query
      } catch (error) {
        console.log("error! ",error)
        throw error
      }
    }

    async update(id, data) {
      let self = this
      try {
          let transaction = await new Promise((resolve, reject) => {
            this.createModel().update({
              where: {
                id: id
              }
            }, data, (err, resource) => {
              console.log(resource, err)
              if (err) reject(err)
              else resolve(resource)
            })
          })
        return transaction
      } catch (error) {
          console.log("error ",error)
          throw error
      }
    }

    async delete(id){
      let self = this;
        try{
            let transaction = await new Promise((resolve, reject) =>{
                self.createModel().destroyById(id,(err, resource) => {
                  if(err) reject(err)
                  else resolve({
                    deleted : true
                  })
                })
            })
            return transaction;
        }catch(error){
            return error;
        }
    }

}
export default Repository
