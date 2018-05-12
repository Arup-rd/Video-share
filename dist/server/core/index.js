'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = exports.app = undefined;

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _serverConfig = require('./serverConfig');

var _serverConfig2 = _interopRequireDefault(_serverConfig);

var _loggerConfig = require('./loggerConfig');

var _loggerConfig2 = _interopRequireDefault(_loggerConfig);

var _databaseConfig = require('./databaseConfig');

var _databaseConfig2 = _interopRequireDefault(_databaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const app = new _koa2.default();
const server = _http2.default.createServer(app.callback());
(0, _serverConfig2.default)(app);
(0, _loggerConfig2.default)(app);

_asyncToGenerator(function* () {
  try {
    const info = yield (0, _databaseConfig2.default)();
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`); // eslint-disable-line no-console
  } catch (error) {
    console.error('Unable to connect to database'); // eslint-disable-line no-console
  }

  yield server.listen(_config2.default.get('server.port'));
  console.log(`Server started on port ${_config2.default.get('server.port')}`); // eslint-disable-line no-console
})();

exports.app = app;
exports.server = server;