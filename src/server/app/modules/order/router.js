import { isAuthenticated } from '@mid';
import {
  OrderSingle,
  OrderCreate,
  OrderUpdate,
  OrderDelete,
  OrderAll,
  ContactUs
} from './controller';

export const baseUrl = '/api/order';

export const routes = [

  {
    method: 'GET',
    route: '/order/all',
    handlers: [
      isAuthenticated,
      OrderAll
    ]
  },
  {
    method: 'POST',
    route: '/contact',
    handlers: [
      ContactUs
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
  }
];
