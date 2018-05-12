'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.baseUrl = undefined;

var _middlewares = require('../../middlewares');

var _controller = require('./controller');

const baseUrl = exports.baseUrl = '/api/user';

const routes = exports.routes = [{
  method: 'GET',
  route: '/me',
  handlers: [_middlewares.isAuthenticated, _controller.myAccount]
}, {
  method: 'GET',
  route: '/:id',
  handlers: [_controller.userSingle]
}, {
  method: 'PUT',
  route: '/',
  handlers: [_middlewares.isAuthenticated, _controller.userUpdate]
}, {
  method: 'DELETE',
  route: '/',
  handlers: [_middlewares.isAuthenticated, _controller.userDelete]
}, {
  method: 'POST',
  route: '/create',
  handlers: [_controller.userCreate]
}, {
  method: 'POST',
  route: '/login',
  handlers: [_controller.userLogin]
}];