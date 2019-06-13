const Router = require('koa-router');
const User   = require('./models/user');

const apiRouter = new Router({
    prefix: '/api/v1'
});

apiRouter.get('/', ctx => {
    ctx.body = 'HELLO WORLD';
});

apiRouter.get('/users', async ctx => {
    ctx.type = 'json';
    ctx.body = await User.find();
});

apiRouter.post('/users', async ctx => {
    ctx.type = 'json';
    const user = new User(ctx.request.body);

    await user.save();

    ctx.redirect('/');
});

module.exports = [
    apiRouter
];