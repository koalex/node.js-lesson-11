module.exports = function (app) {
    app.use(async (ctx, next) => {
        ctx.body = 'USERS';
    });
};