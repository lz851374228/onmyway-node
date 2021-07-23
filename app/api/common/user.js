const Router = require('koa-router')
const router = new Router({ prefix: '/common/user' })
const { RegisterValidator, LoginValidator } = require('../../validators/validator')
const { User } = require('../../models/user')
const { generateToken } = require('../../../core/util')
const { Auth } = require('../../../middlewares/auth')
/**
 * @api {POST} /common/user/register 注册接口
 * @apiGroup User
 *
 * @apiParam {String} account 账号
 * @apiParam {String} password 密码
 * @apiParam {String} confirmPassword 确认密码
 * @apiParam {String} nickname 昵称
 * @apiParam {String{11}} phoneNumber 手机号
 * 
 * 
 * @apiParamExample {json} Request-Example
 * {
 *  "account":"lz123456",
 *  "password":"lz123456",
 *  "confirmPassword":"lz123456",
 *  "phoneNumber":"13312940980",
 *  "nickname":"风紧不扯呼",
 * }
 *
 * @apiSuccessExample  {json} Response-Example
 * {
 *     "msg": "ok",
 *     "code": 20000,
 *     "request": "POST /common/user/register"
 * }
 */
router.post('/register', async (ctx, next) => {
    const v = await new RegisterValidator().validate(ctx)
    const user = {
        account: v.get('body.account'),
        password: v.get('body.password'),
        phone_number: v.get('body.phoneNumber'),
        nickname: v.get('body.nickname'),
    }
    await User.create(user)
    throw new global.errs.Success()
})


/**
 * @api {POST} /common/user/login 登录接口
 * @apiGroup User
 *
 * @apiParam {String} account 账号
 * @apiParam {String} password 密码
 * 
 * @apiParamExample {json} Request-Example
 * {
 *  "account":"lz123456",
 *  "password":"lz123456",
 * }
 *
 * @apiSuccessExample  {json} Response-Example
 * {
 *     "msg": "ok",
 *     "code": 20000,
 *     "request": "POST /common/user/register"
 * }
 */
router.post('/login', async (ctx, next) => {
    const v = await new LoginValidator().validate()
    const user = await User.verifyAccountPassword(v.get('body.account'), v.get('body.password'))
    const token = await generateToken(user.id, Auth.USER)
    throw new global.errs.Success({token})
})




module.exports = router