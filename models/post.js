'use strict';
module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define('posts', {
    title : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    description : {
        type : DataTypes.STRING,
        unique : true,
    },
    user_id : {
        type : DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Posts;
};