import Nuxt from 'nuxt'
import express from 'express'

//Models
//var Database = require('./models');

//Routes

import api from './routes/api'
//var users = require('./routes/users');
//var posts = require('./routes/posts');

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)
// Import API Routes
app.use('/api', api)
// app.use('/api', users)
// app.use('/api', posts)

// Start nuxt.js
async function start () {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')

  try {
    // let connection = Database.sequelize.sync()
    // Instanciate nuxt.js
    const nuxt = new Nuxt(config)

    // Add nuxt.js middleware
    app.use(nuxt.render)
    // Listen the server
    app.listen(port, host)
    app.on('error', onError)
    app.on('listening', onListening)
  } catch (error) {
    console.error('Server runtime error', error)
  }
}

start()
/**
 * Event listener for HTTP server "error" event.
 */

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1) ;
      break ;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1) ;
      break ;
    default:
      throw error ;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
  
}
