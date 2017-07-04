'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      first_name : {
          type : Sequelize.STRING,
          allowNull : false,
      },
      last_name : {
          type : Sequelize.STRING,
          allowNull : false,
      },
      email : {
          type : Sequelize.STRING,
          unique : true,
          allowNull : false,
      },
      password : {
          type : Sequelize.STRING,

      },
      avatar : Sequelize.STRING,
      enabled : {
          type : Sequelize.BOOLEAN,
          defaultValue : true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};