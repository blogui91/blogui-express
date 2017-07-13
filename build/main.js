require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_api__ = __webpack_require__(24);


// Start nuxt.js
var start = function () {
  var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var config, nuxt;
    return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Import and Set Nuxt.js options
            config = __webpack_require__(5);

            config.dev = !("development" === 'production');

            try {
              // Instanciate nuxt.js
              nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt___default.a(config);

              try {
                // Add nuxt.js middleware
                app.use(nuxt.render);

                // Listen the server
                app.listen(port, host);
                app.on('error', onError);
                app.on('listening', onListening);
              } catch (error) {
                console.error(error);
              }
            } catch (error) {
              console.error('Server runtime error', error);
            }

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var favicon = __webpack_require__(15);
var logger = __webpack_require__(16);
var cookieParser = __webpack_require__(17);
var bodyParser = __webpack_require__(18);
var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', port);
// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_3__routes_api__["a" /* default */]);

start();
/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("caminte");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schema; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_caminte__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_caminte___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_caminte__);


var Schema = __WEBPACK_IMPORTED_MODULE_1_caminte___default.a.Schema;
var database = __WEBPACK_IMPORTED_MODULE_0__config___default.a["development" || 'dev'];
var db = void 0;
try {
  db = new Schema(database.driver, database);
} catch (error) {
  console.log('Error connection to Database: ', error);
}

var schema = db;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 *  Default database configuration file
 *
 *  Created by create caminte-cli script
 *  App based on CaminteJS
 *  CaminteJS homepage http://www.camintejs.com
 *
 *  docs: https://github.com/biggora/caminte/wiki/Connecting-to-DB#connecting
 **/

module.exports.production = {
    driver: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'test',
    password: 'test',
    database: 'test',
    autoReconnect: true
};

module.exports.development = {
    driver: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    database: 'mydb',
    autoReconnect: true
};

module.exports.test = {
    driver: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'test',
    password: 'test',
    database: 'test',
    autoReconnect: true
};

module.exports.dev = module.exports.development;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseController = function () {
    function BaseController(repository) {
        _classCallCheck(this, BaseController);

        this.repository = repository;
        this.bindFunctions(this, ["index", "find", "update", "delete", "create"]);
    }

    _createClass(BaseController, [{
        key: "bindFunctions",
        value: function bindFunctions(context, methodNames) {
            methodNames.map(function (methodName) {
                context[methodName] = context[methodName].bind(context);
            });
        }
    }, {
        key: "index",
        value: function () {
            var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
                var operation;
                return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return this.repository.findAll();

                            case 3:
                                operation = _context.sent;

                                res.status(200).json(operation);
                                _context.next = 11;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context["catch"](0);

                                console.log("error ", _context.t0);
                                throw _context.t0;

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
            }));

            function index(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return index;
        }()
    }, {
        key: "find",
        value: function () {
            var _ref2 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(request, response) {
                var id, operation;
                return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                id = request.params.id;
                                _context2.prev = 1;
                                _context2.next = 4;
                                return this.repository.find(id);

                            case 4:
                                operation = _context2.sent;

                                response.status(200).json(operation);
                                _context2.next = 11;
                                break;

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2["catch"](1);
                                throw _context2.t0;

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 8]]);
            }));

            function find(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return find;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref3 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(request, response) {
                var id, operation;
                return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                id = request.params.id;
                                _context3.prev = 1;
                                _context3.next = 4;
                                return this.repository.update(id, request.body);

                            case 4:
                                operation = _context3.sent;

                                response.status(200).json(operation);
                                _context3.next = 11;
                                break;

                            case 8:
                                _context3.prev = 8;
                                _context3.t0 = _context3["catch"](1);

                                response.status(500).json(_context3.t0);

                            case 11:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[1, 8]]);
            }));

            function update(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: "delete",
        value: function () {
            var _ref4 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(request, response) {
                var id, operation;
                return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                id = request.params.id;
                                _context4.prev = 1;
                                _context4.next = 4;
                                return this.repository.delete(id);

                            case 4:
                                operation = _context4.sent;

                                response.status(200).json(operation);
                                _context4.next = 11;
                                break;

                            case 8:
                                _context4.prev = 8;
                                _context4.t0 = _context4["catch"](1);

                                response.status(500).json(_context4.t0);

                            case 11:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[1, 8]]);
            }));

            function _delete(_x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return _delete;
        }()
    }, {
        key: "create",
        value: function () {
            var _ref5 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(request, response) {
                var body, operation;
                return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                body = request.body;
                                _context5.prev = 1;
                                _context5.next = 4;
                                return this.repository.create(body);

                            case 4:
                                operation = _context5.sent;
                                return _context5.abrupt("return", response.status(202).json(operation.resource));

                            case 8:
                                _context5.prev = 8;
                                _context5.t0 = _context5["catch"](1);
                                return _context5.abrupt("return", response.status(500).json(_context5.t0));

                            case 11:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[1, 8]]);
            }));

            function create(_x9, _x10) {
                return _ref5.apply(this, arguments);
            }

            return create;
        }()
    }]);

    return BaseController;
}();

/* harmony default export */ __webpack_exports__["a"] = (BaseController);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Repository = function () {
  function Repository(model, validator) {
    _classCallCheck(this, Repository);

    this.model = model;
    this.validator = validator;
  }

  _createClass(Repository, [{
    key: "createModel",
    value: function createModel() {
      return this.model;
    }
  }, {
    key: "createAndFill",
    value: function createAndFill(body) {
      return new this.model(body);
    }
  }, {
    key: "create",
    value: function () {
      var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(body) {
        var validator, response, self, transaction;
        return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                validator = this.validator.make(body);
                response = {
                  validator: validator,
                  resource: null
                };

                if (!validator.passes()) {
                  _context.next = 16;
                  break;
                }

                self = this;
                _context.prev = 4;
                _context.next = 7;
                return new Promise(function (resolve, reject) {
                  self.createModel().create(body, function (err, newResource) {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(newResource);
                    }
                  });
                });

              case 7:
                transaction = _context.sent;

                response.resource = transaction;
                return _context.abrupt("return", response);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);

                console.log(_context.t0);
                return _context.abrupt("return", _context.t0);

              case 16:
                return _context.abrupt("return", response);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 12]]);
      }));

      function create(_x) {
        return _ref.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "find",
    value: function () {
      var _ref2 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(id) {
        var query;
        return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.createModel().findById(id);

              case 3:
                query = _context2.sent;
                return _context2.abrupt("return", query);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                console.log("error ", _context2.t0);
                throw _context2.t0;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function find(_x2) {
        return _ref2.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _ref3 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var self, query;
        return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = this;
                _context3.prev = 1;
                _context3.next = 4;
                return new Promise(function (resolve, reject) {
                  self.createModel().all(function (err, list) {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(list);
                    }
                  });
                });

              case 4:
                query = _context3.sent;
                return _context3.abrupt("return", query);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);

                console.log("error! ", _context3.t0);
                throw _context3.t0;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 8]]);
      }));

      function findAll() {
        return _ref3.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: "update",
    value: function () {
      var _ref4 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(id, data) {
        var _this = this;

        var self, transaction;
        return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = this;
                _context4.prev = 1;
                _context4.next = 4;
                return new Promise(function (resolve, reject) {
                  _this.createModel().update({
                    where: {
                      id: id
                    }
                  }, data, function (err, resource) {
                    if (err) reject(err);else resolve(resource);
                  });
                });

              case 4:
                transaction = _context4.sent;
                return _context4.abrupt("return", transaction);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);

                console.log("error ", _context4.t0);
                throw _context4.t0;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 8]]);
      }));

      function update(_x3, _x4) {
        return _ref4.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _ref5 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(id) {
        var self, transaction;
        return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                self = this;
                _context5.prev = 1;
                _context5.next = 4;
                return new Promise(function (resolve, reject) {
                  self.createModel().destroyById(id, function (err, resource) {
                    if (err) reject(err);else resolve({
                      deleted: true
                    });
                  });
                });

              case 4:
                transaction = _context5.sent;
                return _context5.abrupt("return", transaction);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", _context5.t0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 8]]);
      }));

      function _delete(_x5) {
        return _ref5.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return Repository;
}();

/* harmony default export */ __webpack_exports__["a"] = (Repository);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 
 *	Validator JS |
 *	(c) 2017 by Cesar Santana 
 */

var Helpers = __webpack_require__(29);
var messages_default = __webpack_require__(30);

var Validator = function () {
	/**
  * Create a new instance.
  *
  * @param {Object} data required
  * @param {Object} rules required
  * @param {Object} messages
  */
	function Validator(data, rules, messages) {
		var customValidators = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		_classCallCheck(this, Validator);

		//contains the validation errors.
		if (customValidators.constructor != Object) {
			throw "You must send your validator as a function inside of an object";
			return;
		}

		this.errors = {};

		//the data to be checked out.
		this.data = data;

		//the rules required.
		this.rules = rules;

		//Error messages container.
		this.messages = messages;

		this.loadHelpers(Helpers);
		this.extend(customValidators);
	}

	_createClass(Validator, [{
		key: 'loadHelpers',
		value: function loadHelpers(helpers) {
			this.helpers = helpers;
		}
	}, {
		key: 'extend',
		value: function extend(validators) {
			Object.assign(this.helpers, validators);
		}

		/**
   * Create a new static instance.
   *
   * @param {Object} data required
   * @param {Object} rules required
   * @param {Object} messages optional
   */

	}, {
		key: 'exec',


		/**
   * Executes  validations rules.
   *
   * @returns {Object}
   */
		value: function exec() {
			var attr_rules = null;

			if (JSON.stringify(this.rules) == '{}') {
				throw "Add at least a rule: we received " + JSON.stringify(this.rules);
			}

			for (var attr in this.rules) {
				this.createBag(attr);
				attr_rules = this.rules[attr].constructor == Array ? this.rules[attr] : this.rules[attr].split(',');
				this.check(attr, attr_rules);
			}

			return this.createResponse();
		}

		/**
   * Create an empty bag errors for each rule item.
   *
   * @returns {Object}
   */

	}, {
		key: 'createBag',
		value: function createBag(attr) {
			if (typeof this.errors[attr] == 'undefined') {
				this.errors[attr] = [];
			}
		}
	}, {
		key: 'createResponse',
		value: function createResponse() {
			var _this = this;

			var errs = JSON.stringify(this.errors);
			var errors = {};
			var key_errors = Object.keys(this.errors);

			key_errors.forEach(function (key_error) {
				if (_this.errors[key_error].length > 0) {
					errors[key_error] = _this.errors[key_error];
				}
			});

			var response = {
				fails: function fails() {
					var _this2 = this;

					var keys = Object.keys(this.messages);
					var fails = false;
					keys.forEach(function (key) {
						if (_this2.messages[key].length > 0) {
							fails = true;
						}
					});
					return fails;
				},
				passes: function passes() {
					return !this.fails();
				},

				messages: this.errors,
				errors: errors,
				first: function first(attr) {
					if (this.has(attr)) {
						return this.messages[attr][0];
					}
					return null;
				},
				get: function get(attr) {
					if (this.has(attr)) {
						return this.messages[attr];
					}
					return [];
				},
				has: function has(attr) {
					if (this.messages[attr]) {
						if (this.messages[attr].length > 0) {
							return true;
						}
					}
					return false;
				}
			};

			return response;
		}

		/**
   * Validate each required attribute.
   *
   * @param {String} attribute
   * @param {Array} rules
   * @returns {Array}
   */

	}, {
		key: 'check',
		value: function check(attribute, rules) {
			var value = this.data[attribute];

			for (var index in rules) {
				var err = null;
				var rule = rules[index];

				if (this.helpers[rule] && !this.helpers[rule](value)) {
					//Something like this.helpers.required && !this.helpers.required(value)

					if (typeof this.messages[attribute] == 'undefined') {
						//There is not any specific message for this attribute
						err = this.getDefaultMessage(attribute, rule);
					} else if (typeof this.messages[attribute][rule] == 'undefined') {
						// There is not any specific message for the rule of the attribute
						err = this.getDefaultMessage(attribute, rule);
					} else {
						err = this.messages[attribute][rule];
					}

					this.messageBag({
						key: attribute,
						error: err
					});
				}
			}
		}

		/**
   * Returns a default message depending of the type of rule.
   *
   * @returns Promise
   */

	}, {
		key: 'getDefaultMessage',
		value: function getDefaultMessage(attribute, rule) {
			return messages_default[rule].replace(":attribute", attribute);
		}

		/**
   * Store errors in a bag .
   *
   * @param {Object} data
   * @return {Void}
   */

	}, {
		key: 'messageBag',
		value: function messageBag(data) {
			if (typeof this.errors[data.key] == 'undefined') {
				this.errors[data.key] = [];
			}
			if (this.errors[data.key].indexOf(data.error) == -1) {
				this.errors[data.key].push(data.error);
			}
		}
	}], [{
		key: 'make',
		value: function make() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var messages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var customValidators = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

			var validate = new Validator(data, rules, messages, customValidators);

			//Validate if 
			if (JSON.stringify(this.data) == '{}') throw "Add some data to validate: we received " + JSON.stringify(this.rules);

			return validate.exec();
		}
	}]);

	return Validator;
}();

/* harmony default export */ __webpack_exports__["a"] = (Validator);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts__ = __webpack_require__(32);





var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add USERS Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__posts__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_api_User_controller__ = __webpack_require__(26);


var Route = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
var UsersController = new __WEBPACK_IMPORTED_MODULE_1__controllers_api_User_controller__["a" /* default */]();
Route.get('/users/', UsersController.index);
Route.post('/users/', UsersController.create);
Route.get('/users/:id', UsersController.find);
Route.put('/users/:id', UsersController.update);
Route.delete('/users/:id', UsersController.delete);

/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base_controller__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_User_repository__ = __webpack_require__(27);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var UsersController = function (_BaseController) {
    _inherits(UsersController, _BaseController);

    function UsersController() {
        _classCallCheck(this, UsersController);

        return _possibleConstructorReturn(this, (UsersController.__proto__ || Object.getPrototypeOf(UsersController)).call(this, new __WEBPACK_IMPORTED_MODULE_1__repositories_User_repository__["a" /* default */]()));
    }

    return UsersController;
}(__WEBPACK_IMPORTED_MODULE_0__Base_controller__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (UsersController);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base_repository__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_User_validator__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_UserModel__ = __webpack_require__(37);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var UserRepository = function (_BaseRepository) {
    _inherits(UserRepository, _BaseRepository);

    function UserRepository() {
        _classCallCheck(this, UserRepository);

        return _possibleConstructorReturn(this, (UserRepository.__proto__ || Object.getPrototypeOf(UserRepository)).call(this, __WEBPACK_IMPORTED_MODULE_2__models_UserModel__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__validators_User_validator__["a" /* default */]));
    }

    return UserRepository;
}(__WEBPACK_IMPORTED_MODULE_0__Base_repository__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (UserRepository);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_validator_js__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var UserValidator = function (_Validator) {
    _inherits(UserValidator, _Validator);

    function UserValidator(data) {
        _classCallCheck(this, UserValidator);

        var _this = _possibleConstructorReturn(this, (UserValidator.__proto__ || Object.getPrototypeOf(UserValidator)).call(this));

        _this.rules = {
            last_name: 'required',
            first_name: 'required',
            email: 'email'
        };

        _this.messages = {
            last_name: {
                required: 'Es campo apellido es requerido'
            }
        };

        _this.data = data;
        _this.extend({
            empty: function empty(value) {
                value = value ? value.toString() : null;
                return value == null || value.length == 0 || value.trim() == '';
            }
        });

        return _this;
    }

    _createClass(UserValidator, null, [{
        key: 'make',
        value: function make() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var validate = new UserValidator(data);
            return validate.exec();
        }
    }]);

    return UserValidator;
}(__WEBPACK_IMPORTED_MODULE_0__base_validator_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (UserValidator);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	/**
  * Check if the field is blank.
  *
  * @param {String} value
  * @return {Boolean}
  */
	empty: function empty(value) {
		if (value != null) {
			value = value.toString();
		}
		return value == null || value.length == 0 || value.trim() == '';
	},


	/**
  * No blank fields.
  *
  * @param {String} value
  * @return {Boolean}
  */
	required: function required(value) {
		if (typeof value == 'boolean') return value;

		return !this.empty(value);
	},


	/**
  * Numeric rule.
  *
  * @param {String} value
  * @return {Boolean}
  */
	numeric: function numeric(value) {
		var regexp = /^(-?[1-9]\d*|0)$/;
		return regexp.test(value);
	},


	/**
  * Email rule.
  *
  * @param {String} value
  * @return {Boolean}
  */
	email: function email(value) {
		var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regexp.test(value);
	},


	/**
  * Only URL.
  *
  * @param {String} value
  * @return {Boolean}
  */
	url: function url(value) {
		var regexp = /^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i;
		return regexp.test(value);
	},


	/**
  * Get first item.
  *
  * @param {String} value
  * @return {Boolean}
  */
	first: function first() {
		var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		if (array.constructor == Array) {
			if (array.length > 0) {
				return array[0];
			}
		}
		throw "Error getting first element, array is needed but we get " + array.constructor.name;
	}
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	'required': 'The field :attribute is required',
	'email': 'The field :attribute must be an email',
	'numeric': "The field :attribute must be numeric"
});

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_api_Posts_controller__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_UserModel__ = __webpack_require__(37);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var express = __webpack_require__(7);
var Route = express.Router();
var PostsController = new __WEBPACK_IMPORTED_MODULE_1__controllers_api_Posts_controller__["a" /* default */]();


Route.get('/test/', function () {
    var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
        var a;
        return __WEBPACK_IMPORTED_MODULE_0__home_blogui91_Documents_personal_projects_blogui_express_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return __WEBPACK_IMPORTED_MODULE_2__models_UserModel__["a" /* default */].findById(2);

                    case 3:
                        a = _context.sent;

                        res.status(200).json(a);
                        _context.next = 11;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);
                        res.status(500).json({
                            error: "Error!"
                        });

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this, [[0, 7]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}()

// User.findById(2, function(err, user){
//     console.log(user)
//     if(user){
//         res.status(200).json({
//             user
//         })
//     }
// })
);

Route.get('/posts/', PostsController.index);
Route.post('/posts/', PostsController.create);
Route.get('/posts/:id', PostsController.find);
Route.put('/posts/:id', PostsController.update);
Route.delete('/posts/:id', PostsController.delete);

/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base_controller__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_Post_repository__ = __webpack_require__(34);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PostsController = function (_BaseController) {
  _inherits(PostsController, _BaseController);

  function PostsController() {
    _classCallCheck(this, PostsController);

    return _possibleConstructorReturn(this, (PostsController.__proto__ || Object.getPrototypeOf(PostsController)).call(this, new __WEBPACK_IMPORTED_MODULE_1__repositories_Post_repository__["a" /* default */]()));
  }

  return PostsController;
}(__WEBPACK_IMPORTED_MODULE_0__Base_controller__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (PostsController);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base_repository__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_Post_validator__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_post__ = __webpack_require__(36);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PostRepository = function (_BaseRepository) {
  _inherits(PostRepository, _BaseRepository);

  function PostRepository() {
    _classCallCheck(this, PostRepository);

    return _possibleConstructorReturn(this, (PostRepository.__proto__ || Object.getPrototypeOf(PostRepository)).call(this, __WEBPACK_IMPORTED_MODULE_2__models_post__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__validators_Post_validator__["a" /* default */]));
  }

  return PostRepository;
}(__WEBPACK_IMPORTED_MODULE_0__Base_repository__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (PostRepository);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_validator_js__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PostValidator = function (_Validator) {
    _inherits(PostValidator, _Validator);

    function PostValidator(data) {
        _classCallCheck(this, PostValidator);

        var _this = _possibleConstructorReturn(this, (PostValidator.__proto__ || Object.getPrototypeOf(PostValidator)).call(this));

        _this.rules = {
            title: 'required',
            description: 'required'
        };

        _this.messages = {
            title: {
                required: 'Es campo title es requerido'
            }
        };

        _this.data = data;
        _this.extend({
            empty: function empty(value) {
                value = value ? value.toString() : null;
                return value == null || value.length == 0 || value.trim() == '';
            }
        });

        return _this;
    }

    _createClass(PostValidator, null, [{
        key: 'make',
        value: function make() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var validate = new PostValidator(data);
            return validate.exec();
        }
    }]);

    return PostValidator;
}(__WEBPACK_IMPORTED_MODULE_0__base_validator_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (PostValidator);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var PostSchema = {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: false
    }
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Post', PostSchema, 'posts'));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database_connection__ = __webpack_require__(19);
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


var User = __WEBPACK_IMPORTED_MODULE_0__database_connection__["a" /* schema */].define('users', {
  id: { type: __WEBPACK_IMPORTED_MODULE_0__database_connection__["a" /* schema */].Number },
  active: { type: __WEBPACK_IMPORTED_MODULE_0__database_connection__["a" /* schema */].Number },
  first_name: { type: __WEBPACK_IMPORTED_MODULE_0__database_connection__["a" /* schema */].String },
  last_name: { type: __WEBPACK_IMPORTED_MODULE_0__database_connection__["a" /* schema */].String },
  email: { type: __WEBPACK_IMPORTED_MODULE_0__database_connection__["a" /* schema */].String, unique: true },
  password: { type: __WEBPACK_IMPORTED_MODULE_0__database_connection__["a" /* schema */].String },
  created_at: { type: __WEBPACK_IMPORTED_MODULE_0__database_connection__["a" /* schema */].Date },
  updated_at: { type: __WEBPACK_IMPORTED_MODULE_0__database_connection__["a" /* schema */].Date }
}, {
  primaryKeys: ['id']
});

User.afterUpdate = function (next) {
  this.updated_at = new Date();
  this.save();
  next();
};

User.afterCreate = function (next) {
  this.created_at = new Date();
  this.updated_at = new Date();
  this.save();
  next();
};
/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })
/******/ ]);
//# sourceMappingURL=main.map