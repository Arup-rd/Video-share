'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectDatabase;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connectDatabase() {
  let dbUri;

  // if (config.get('db.options.userName')) {
  //   dbUri = `mongodb://${config.get('db.options.userName')}:${config.get('db.options.passWord')}@${config.get('db.host')}:${config.get('db.options.port')}/${config.get('db.dbName')}`;
  // } else {
  //   dbUri = `mongodb://${config.get('db.host')}:${config.get('db.options.port')}/${config.get('db.dbName')}`;
  // }

  dbUri = 'mongodb://root:12345@ds263089.mlab.com:63089/parole';

  return new Promise((resolve, reject) => {
    _mongoose2.default.Promise = global.Promise;
    _mongoose2.default.connection.on('error', error => reject(error)).on('close', () => console.log('Database connection closed.')) // eslint-disable-line no-console
    .once('open', () => resolve(_mongoose2.default.connections[0]));

    _mongoose2.default.connect(dbUri, {
      useMongoClient: true
    });
  });
}