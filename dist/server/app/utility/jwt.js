'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJwt = exports.jwtVerify = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { 0: secret } = _config2.default.get('secret');

const jwtVerify = token => new Promise((resolve, reject) => {
  (0, _jsonwebtoken.verify)(token.replace('Bearer ', ''), secret, (err, decoded) => {
    if (err || !decoded) {
      reject(err);
    }
    resolve(decoded);
  });
});

const generateJwt = data => new Promise((resolve, reject) => {
  (0, _jsonwebtoken.sign)(data, secret, {
    expiresIn: '6h'
  }, (err, token) => {
    if (err) {
      reject(err);
    }
    resolve(`Bearer ${token}`);
  });
});

exports.jwtVerify = jwtVerify;
exports.generateJwt = generateJwt;