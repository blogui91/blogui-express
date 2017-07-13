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

var User = schema.define('users', {
  id: { type: schema.Number },
  active: { type: schema.Number },
  first_name: { type: schema.String },
  last_name: { type: schema.String },
  email: {type: schema.String, unique: true},
  password: { type: schema.String },
  created_at: { type: schema.Date },
  updated_at: { type: schema.Date }
}, {
  primaryKeys: ['id']
})

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
