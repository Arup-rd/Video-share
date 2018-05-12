import { isAuthenticated } from '@mid';
import {
  userSingle,
  userCreate,
  userUpdate,
  userDelete,
  userLogin,
  myAccount
} from './controller';

export const baseUrl = '/api/user';

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
      userSingle
    ]
  },
  {
    method: 'PUT',
    route: '/',
    handlers: [
      isAuthenticated,
      userUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/',
    handlers: [
      isAuthenticated,
      userDelete
    ]
  },
  {
    method: 'POST',
    route: '/create',
    handlers: [
      userCreate
    ]
  },
  {
    method: 'POST',
    route: '/login',
    handlers: [
      userLogin
    ]
  }
];
