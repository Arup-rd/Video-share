import Router from 'koa-router';

import { UserRouteProps } from './user';
import { ContentRouteProps } from './content';
import { CategoryRouteProps } from './category';

const routerControllPros = [
  UserRouteProps,
  ContentRouteProps,
  CategoryRouteProps
];

let instance;

const routerControl = (app) => {
  routerControllPros.forEach((routeProperty) => {
    instance = new Router({ prefix: routeProperty.baseUrl });
    routeProperty.routes.forEach((config) => {
      const {
        method = '',
        route = '',
        handlers = []
      } = config;

      const lastHandler = handlers.pop();

      instance[method.toLowerCase()](route, ...handlers, async (ctx) => {
        const hddd = await lastHandler(ctx);
        return hddd;
      });

      app
        .use(instance.routes())
        .use(instance.allowedMethods());
    });
  });
};

export default routerControl;
