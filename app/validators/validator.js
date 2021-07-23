const { LinValidator, Rule } = require("../../core/lin-validator-v2");//自定义校验器lin-validator-v2
const { User } = require('../models/user')//用户模型
const { LoginType, ArtType } = require('../lib/enum')

// 注册接口校验器
class RegisterValidator extends LinValidator {
    constructor() {
        super()
        this.account = [
            new Rule('matches', '账号不符合规范,应为6-20位数字和字母', '^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$')
        ]
        this.password = [
            new Rule('matches', '密码不符合规范,应为6-20位数字和字母', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$')
        ]
        this.phoneNumber = [
            new Rule('isMobilePhone', '手机号码输入有误', ['zh-CN'])
        ]
    }
    async validateAccountNumber(vals) {
        const account = vals.body.account
        const user = await User.findAll({
            where: {
                account: account
            }
        })
        if (user.length > 0) {
            throw new Error(`账号:${account}已存在，请重新输入！`)
        }
    }
    async validatePassword(vals) {
        const password = vals.body.password
        const confirmPassword = vals.body.confirmPassword
        if (password !== confirmPassword) {
            throw new Error(`密码:两次输入不一致，请重新输入！`)
        }
    }
}

// Token值校验器
class LoginValidator extends LinValidator {
    constructor() {
        super()
        this.account = [
            new Rule('matches', '账号不符合规范,应为6-20位数字和字母', '^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$')
        ]
        this.password = [
            new Rule('matches', '密码不符合规范,应为6-20位数字和字母', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$')
        ]
    }
}

module.exports = {
    RegisterValidator,
    LoginValidator,
}