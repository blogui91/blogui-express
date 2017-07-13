import dbConf from './config'
import caminte from 'caminte'
var Schema = caminte.Schema
var database = dbConf[process.env.NODE_ENV || 'dev']
let db
try {
  db = new Schema(database.driver, database)
} catch (error) {
  console.log('Error connection to Database: ', error)
}

export const schema = db
