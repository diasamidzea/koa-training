const Router = require('koa-router');
const router = new Router();

const Task = require('../api/task');

router.post('/addTask', async (ctx) => {
  console.log("ctx.request.body:", ctx.request.body);
  try {
    const result = await Task.addTask({...ctx.request.body});
    ctx.body = result;
  }
  catch (err) {
    console.log('err', err);
    ctx.status = 500;
    ctx.body = 'Internal error';
  }
});

router.get('/', async (ctx) => {
  ctx.body = 'its works';
});


module.exports = router;