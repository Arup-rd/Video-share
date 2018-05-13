import { isAuthenticated } from '@mid';
import {
  contentAll,
  contentSingle,
  contentCreate,
  contentUpdate,
  contentDelete,
  ContentDownLoad,
  myContent,
  userContent,
  filterContent,
  contentCategory,
  contentAllImages,
  contentAllVideos,
  VideosWithCat,
  ImageWithCat,
  UpdateViews
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
    route: '/download/:contentId',
    handlers: [
      isAuthenticated,
      ContentDownLoad
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
    route: '/video',
    handlers: [
      contentAllVideos
    ]
  },
  {
    method: 'GET',
    route: '/video/:category',
    handlers: [
      VideosWithCat
    ]
  },
  {
    method: 'GET',
    route: '/image',
    handlers: [
      contentAllImages
    ]
  },
  {
    method: 'GET',
    route: '/image/:category',
    handlers: [
      ImageWithCat
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
    method: 'PUT',
    route: '/public/:id',
    handlers: [
      UpdateViews
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
