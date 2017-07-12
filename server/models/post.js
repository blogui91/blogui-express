 'use strict'
 import mongoose from 'mongoose'
 let Schema = mongoose.Schema
 let PostSchema = {
    title : {
        type : String,
        required : true,
    },
    description: {
        type: String,
        required : true,
    },
    user_id: {
        type : Number,
        required : false
    }
 }

 export default mongoose.model('Post', PostSchema, 'posts')
 
