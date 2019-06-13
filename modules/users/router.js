const Router = require('koa-router');

const apiRouter = new Router({
    prefix: '/api/v1'
});

apiRouter.get('/', ctx => {
    ctx.body = 'HELLO WORLD';
});

module.exports = [
    apiRouter
];