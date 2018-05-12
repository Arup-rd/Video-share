'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authenticated = require('./authenticated');

Object.defineProperty(exports, 'isAuthenticated', {
  enumerable: true,
  get: function () {
    return _authenticated.isAuthenticated;
  }
});
Object.defineProperty(exports, 'refreshMid', {
  enumerable: true,
  get: function () {
    return _authenticated.refreshMid;
  }
});