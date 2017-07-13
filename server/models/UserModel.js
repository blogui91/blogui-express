/**
 *  User schema
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 **/

/**
 *  Define User Model
 *  @param {Object} schema
 *  @return {Object}
 **/
import { schema } from '../database/connection'
import Bcrypt from 'bcrypt'

var User = schema.define('users', {
  id: { type: schema.Number },
  active: { type: schema.Number, default: true},
  first_name: { type: schema.String },
  last_name: { type: schema.String },
  avatar: { type: schema.String },
  email: {type: schema.String, unique: true},
  password: { type: schema.String },
  created_at: { type: schema.Date },
  updated_at: { type: schema.Date }
}, {
  primaryKeys: ['id']
})

User.beforeCreate = async function (next) {
    // Pass control to the next
    this.password = await Bcrypt.hash(this.password, 5)
    next();
};

User.afterUpdate = function (next) {
  this.updated_at = new Date()
  this.save()
  next()
}

User.afterCreate = function (next) {
  this.created_at = new Date()
  this.updated_at = new Date()
  this.save()
  next()
}
export default User
