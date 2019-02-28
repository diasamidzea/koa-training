const Koa = require('koa');
const app = new Koa();

require('./db')

const koaBody = require('koa-body');
const router = require('./router');

/*app.use(async (ctx, next) => {
  console.log('middleware' + ++i);
  ctx.body = 'Hello world';
  next();
})*/

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000, () => {
  console.log('http://localhost:3000');
});