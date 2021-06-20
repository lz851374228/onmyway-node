const { HttpException } = require('../core/http-exception')

// 全局异常捕获
const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        const isHttpException = error instanceof HttpException
        const isDev = global.config.environment === 'dev'
        if (isDev && !isHttpException) {
            throw error
        }
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        } else {
            ctx.body = {
                msg: 'we made a mistake !!!∑(ﾟДﾟノ)ノ',
                code: 999,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
    }
}
module.exports = catchError