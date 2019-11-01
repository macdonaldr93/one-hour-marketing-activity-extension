require('isomorphic-fetch');

const dotenv = require('dotenv');
const Koa = require('koa');

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;

const server = new Koa();

server.use(async (ctx, next) => {
  await next();
  ctx.body = 'OK';
});

server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
