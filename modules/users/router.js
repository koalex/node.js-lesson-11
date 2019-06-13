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
    const user = new User(ctx.request.body);

    await user.save();

    ctx.redirect('/');
});

apiRouter.post('/messages', async ctx => {
    const { email, password } = ctx.request.body;

    const user = await User.findOne({ email: String(email) });

    if (!user) {
        return ctx.throw(400, 'пользователь не найден');
    }

    ctx.body = ctx.request.body;
});

module.exports = [
    apiRouter
];