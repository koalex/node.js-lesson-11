const Router = require('koa-router');

const apiRouter = new Router({
    prefix: '/api/v1'
});

apiRouter.get('/', ctx => {
    ctx.body = 'HELLO WORLD';
});

apiRouter.post('/users', ctx => {
    ctx.type = 'json';
    ctx.body = ctx.request.body;
});

module.exports = [
    apiRouter
];