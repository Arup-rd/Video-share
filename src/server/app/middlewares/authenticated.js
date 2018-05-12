import { jwtVerify } from '@utl';

let token;
let decode;

const isAuthenticated = async (ctx, next) => {
  try {
    token = ctx.request.headers.authorization;
    decode = await jwtVerify(token);
  } catch (e) {
    ctx.throw(401, e.message);
  } finally {
    if (!decode) {
      ctx.throw(401, { message: 'Token has expired' });
    }
    ctx.state.user = decode;
    await next();
  }
};

const refreshMid = async (ctx, next) => {
  try {
    token = ctx.request.headers.authorization;
    decode = await jwtVerify(token);
  } catch (e) {
    console.log(e.name); //eslint-disable-line
  } finally {
    if (!decode) {
      ctx.throw(401, { message: 'Token has expired' });
    }
    ctx.state.user = decode;
    ctx.state.user.token = token;
    await next();
  }
};

export {
  isAuthenticated,
  refreshMid
};
