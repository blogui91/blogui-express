'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
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
      },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};