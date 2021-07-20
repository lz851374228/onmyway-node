const requireDirectory = require('require-directory')//实现路由自动加载
const Router = require('koa-router');//路由中间件
class InitManager {
    // 入口文件
    static initCore(app) {
        InitManager.app = app
        InitManager.loadConfig()
        InitManager.initLoadRouters()
        InitManager.loadHttpException()
        
    }
    // 初始化配置加载至全局global
    static loadConfig(path = '') {
        const configPath = path || process.cwd() + '/config.js'
        const config = require(configPath)
        global.config = config
    }
    // 初始化路由
    static initLoadRouters() {
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module, apiDirectory, {
            visit: whenLoadModule
        })
        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }
    // 初始化接口请求异常处理类加载至全局
    static loadHttpException() {
        const errors = require('./http-exception')
        global.errs = errors
    }
}

module.exports = InitManager