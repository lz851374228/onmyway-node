/*
 * @Author: your name
 * @Date: 2021-06-20 10:04:22
 * @LastEditTime: 2021-06-20 10:39:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \catering_koa\app\services\wx.js
 */
const axios = require('axios')
const util = require('util')
const { User } = require('../models/user')
const { generateToken } = require('../../core/util')
const { Auth } = require('../../middlewares/auth')

class WXManager {
    static async codeToken(code) {
        const url = util.format(global.config.wx.loginUrl,
            global.config.wx.appId,
            global.config.wx.appSecret,
            code)
        const result = await axios.get(url)
        if (result.status !== 200) {
            throw new global.errs.AuthFailed('openid获取失败')
        }
        const errCode = result.data.errcode
        const errMsg = result.data.errmsg
        if (errCode) {
            throw new global.errs.AuthFailed('openid获取失败:' + errMsg)
        }
        let user = await User.getUserByOpenid(result.data.openid)
        if (!user) {
            user = await User.registerByOpenid(result.data.openid)
        }
        return generateToken(user.id, Auth.USER)
    }
}

module.exports = {
    WXManager
}