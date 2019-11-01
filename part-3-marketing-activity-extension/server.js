require('isomorphic-fetch');

const dotenv = require('dotenv');
const Koa = require('koa');
const session = require('koa-session');
const {default: createShopifyAuth} = require('@shopify/koa-shopify-auth');
const Router = require('@koa/router');

dotenv.config();

const {SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, PORT} = process.env;
const port = parseInt(PORT, 10) || 3000;

const server = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'OK';
});

router.post('/marketing_activities/preload_form_data', ctx => {
  ctx.body = {
    form_data: {
      budget: {
        currency: 'CAD',
      },
    },
  };
});

server.keys = [SHOPIFY_API_SECRET_KEY];

server.use(session(server));

server.use(
  createShopifyAuth({
    apiKey: SHOPIFY_API_KEY,
    secret: SHOPIFY_API_SECRET_KEY,
    scopes: ['read_products'],
    afterAuth(ctx) {
      ctx.redirect('/');
    },
  }),
);

server.use(router.routes());
server.use(router.allowedMethods());

server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
