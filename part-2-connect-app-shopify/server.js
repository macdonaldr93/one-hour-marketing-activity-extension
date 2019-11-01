require('isomorphic-fetch');

const dotenv = require('dotenv');
const Koa = require('koa');
const session = require('koa-session');
const {default: createShopifyAuth} = require('@shopify/koa-shopify-auth');

dotenv.config();

const {SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, PORT} = process.env;
const port = parseInt(PORT, 10) || 3000;

const server = new Koa();

server.keys = [SHOPIFY_API_SECRET_KEY];

server.use(session(server));

server.use(
  createShopifyAuth({
    apiKey: SHOPIFY_API_KEY,
    secret: SHOPIFY_API_SECRET_KEY,
    scopes: ['read_products'],
    afterAuth(ctx) {
      const {shop, accessToken} = ctx.session;
      ctx.redirect('/');
    },
  }),
);

server.use(async (ctx, next) => {
  await next();
  ctx.body = 'OK';
});

server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
