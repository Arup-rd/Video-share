'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.baseUrl = undefined;

var _middlewares = require('../../middlewares');

var _controller = require('./controller');

const baseUrl = exports.baseUrl = '/api/category';

const routes = exports.routes = [{
  method: 'GET',
  route: '/',
  handlers: [_controller.CategoryAll]
}, {
  method: 'GET',
  route: '/:id',
  handlers: [_controller.CategorySingle]
}, {
  method: 'PUT',
  route: '/:id',
  handlers: [_middlewares.isAuthenticated, _controller.CategoryUpdate]
}, {
  method: 'DELETE',
  route: '/:id',
  handlers: [_middlewares.isAuthenticated, _controller.CategoryDelete]
}, {
  method: 'POST',
  route: '/',
  handlers: [
  // isAuthenticated,
  _controller.CategoryCreate]
}];