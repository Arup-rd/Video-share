import { isAuthenticated } from '@mid';
import {
  adminAll,
  adminSingle,
  adminCreate,
  adminUpdate,
  adminDelete,
  myadmin,
  useradmin,
  filteradmin,
  adminCategory
} from './controller';

export const baseUrl = '/api/admin';

export const routes = [
  {
    method: 'GET',
    route: '/category',
    handlers: [
      adminCategory
    ]
  },
  {
    method: 'GET',
    route: '/category/:filter',
    handlers: [
      filteradmin
    ]
  },
  {
    method: 'GET',
    route: '/user/:user',
    handlers: [
      useradmin
    ]
  },
  {
    method: 'GET',
    route: '/my',
    handlers: [
      isAuthenticated,
      myadmin
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      adminAll
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      adminSingle
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      isAuthenticated,
      adminUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      isAuthenticated,
      adminDelete
    ]
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      isAuthenticated,
      adminCreate
    ]
  }
];
