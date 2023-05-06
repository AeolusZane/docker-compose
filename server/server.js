const koa = require('koa');
const app = new koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');


app.use(cors());
app.use(bodyParser());

// 路由

router.get('/api', async (ctx, next) => {
    console.log('hello world from koa')
    ctx.body = {
        data: 'hello world from koa'
    };
})

app.use(router.routes());

app.listen(80, () => {
    console.log('server is running at http://localhost:80')
});