/*
 * @Author: your name
 * @Date: 2021-06-20 10:04:49
 * @LastEditTime: 2021-06-20 10:12:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \catering_koa\config\config.js
 */
module.exports = {
    environment: 'dev',
    database: {
        dbName: 'catering_dev',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: ''
    },
    security: {
        secretKey: 'abcdefg',
        expiresIn: 60 * 60
    },
    wx: {
        appId: 'wx7a3210f62c95aa2c',
        appSecret: '36828304517ba13ff64574beb8f81b81',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    },
    yushu:{
        detailUrl:'http://t.yushu.im/v2/book/id/%s',
        keywordUrl:'http://t.yushu.im/v2/book/search?q=%s&count=%s&start=%s&summary=%s'
    },
}