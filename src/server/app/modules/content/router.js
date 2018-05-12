import { isAuthenticated } from '@mid';
import {
  contentAll,
  contentSingle,
  contentCreate,
  contentUpdate,
  contentDelete,
  myContent,
  userContent,
  filterContent,
  contentCategory
} from './controller';

export const baseUrl = '/api/content';

export const routes = [
  {
    method: 'GET',
    route: '/category',
    handlers: [
      contentCategory
    ]
  },
  {
    method: 'GET',
    route: '/category/:filter',
    handlers: [
      filterContent
    ]
  },
  {
    method: 'GET',
    route: '/user/:user',
    handlers: [
      userContent
    ]
  },
  {
    method: 'GET',
    route: '/my',
    handlers: [
      isAuthenticated,
      myContent
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      contentAll
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      contentSingle
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      isAuthenticated,
      contentUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      isAuthenticated,
      contentDelete
    ]
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      isAuthenticated,
      contentCreate
    ]
  }
];
