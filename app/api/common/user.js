const Router = require('koa-router')
const router = new Router({ prefix: '/common/user' })
const { RegisterValidator } = require('../../validators/validator')
const { User } = require('../../models/user')

router.post('/register', async (ctx, next) => {
    const v = await new RegisterValidator().validate(ctx)
    // const user = {
    //     account_number: v.get('body.accountNumber'),
    //     password: v.get('body.password')
    // }
    // await User.create(user)
    throw new global.errs.Success()
})

module.exports = router