/*
 * @Author: your name
 * @Date: 2021-06-20 10:04:22
 * @LastEditTime: 2021-06-20 10:36:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \catering_koa\app\lib\enum.js
 */
function isThisType(val) {
    for (let key in this) {
        if (this[key] == val) {
            return true
        }
    }
    return false
}
// 登录类型
const LoginType = {
    USER_MINI_PROGRAM: 100,
    USER_EMAIL: 101,
    USER_MOBILE: 102,
    ADMIN_EMAIL: 200,
    isThisType
}

module.exports = {
    LoginType,
    
}