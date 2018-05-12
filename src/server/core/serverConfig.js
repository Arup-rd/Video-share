import convert from 'koa-convert';
import cors from 'kcors';
import bodyParser from 'koa-body';
import session from 'koa-session';
import helmet from 'koa-helmet';
import config from 'config';
import serve from 'koa-static';
import mount from 'koa-mount';
import historyApiFallback from 'koa-history-api-fallback';

import { cModules } from '../app';
import { catchErr, statusMessage } from './errorConfig';

function baseConfig(app) {
  app.keys = config.get('secret');
  app.proxy = true;

  app.use(convert.compose(
    catchErr,
    cors({
      credentials: true,
      origin: true
    }),
    bodyParser({
      multipart: true,
      formLimit: config.get('file.size')
    }),
    session({
      maxAge: 21600000
    }, app),
    helmet(),
    statusMessage
  ));

  cModules(app);
  // app.use(cMiddleware());

  app.use(convert.compose(
    historyApiFallback(),
    // mount(serve(config.get('paths.dist.server'))),
    mount(serve(config.get('paths.static'))),
    mount('/dist', serve(config.get('paths.dist.server')))
  ));
}

export default baseConfig;
