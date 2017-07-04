'use strict';
let user = {
    first_name : DataTypes.STRING,
    last_name  : DataTypes.STRING,
    email : {
          type : DataTypes.STRING,
          unique : true,
          allowNull : false,
    },
    password : {
        type : DataTypes.STRING,

    },
    avatar : DataTypes.STRING,
    enabled : {
        type : DataTypes.BOOLEAN,
        defaultValue : true
    }
};