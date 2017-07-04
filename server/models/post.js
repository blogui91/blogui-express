 import caminte from 'caminte'

let Schema = caminte.Schema;

var schema = {
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
  }