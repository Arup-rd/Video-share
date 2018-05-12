import { isAuthenticated } from '@mid';
import {
  OrderSingle,
  OrderCreate,
  OrderUpdate,
  OrderDelete,
  OrderLogin,
  myAccount
} from './controller';

export const baseUrl = '/api/Order';

export const routes = [
  {
    method: 'GET',
    route: '/me',
    handlers: [
      isAuthenticated,
      myAccount
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      OrderSingle
    ]
  },
  {
    method: 'PUT',
    route: '/',
    handlers: [
      isAuthenticated,
      OrderUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/',
    handlers: [
      isAuthenticated,
      OrderDelete
    ]
  },
  {
    method: 'POST',
    route: '/create',
    handlers: [
      OrderCreate
    ]
  },
  {
    method: 'POST',
    route: '/login',
    handlers: [
      OrderLogin
    ]
  }
];
