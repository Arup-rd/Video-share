import { isAuthenticated } from '@mid';
import {
  CategoryAll,
  CategorySingle,
  CategoryCreate,
  CategoryUpdate,
  CategoryDelete
} from './controller';

export const baseUrl = '/api/category';

export const routes = [
  {
    method: 'GET',
    route: '/',
    handlers: [
      CategoryAll
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      CategorySingle
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      isAuthenticated,
      CategoryUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      isAuthenticated,
      CategoryDelete
    ]
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      // isAuthenticated,
      CategoryCreate
    ]
  }
];
