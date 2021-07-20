const Router = require('koa-router')
const router = new Router({ prefix: '/common/user' })
const { RegisterValidator } = require('../../validators/validator')
const { User } = require('../../models/user')

/**
 * @api {Get} /user/get getUserInfo
 * @apiGroup User
 *
 * @apiParam {String} name 文章名
 * @apiParamExample {json} Request-Example
 * {
 *  "userName": "Eve"
 * }
 *
 * @apiSuccessExample  {json} Response-Example
 * {
 *   "userName": "Eve",
 *   "createTime": "1568901681"
 *   "updateTime": "1568901681"
 * }
 */
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