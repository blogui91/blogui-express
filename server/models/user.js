'use strict';

import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let UserSchema = {
    first_name : {
        type : String,
        required : true,
    },
    last_name  : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true,
    },
    password : {
    type : String,

    },
    avatar : String,
    enabled : {
        type : Boolean,
        defaultValue : true
    }
}

export default mongoose.model('User', UserSchema, 'users')