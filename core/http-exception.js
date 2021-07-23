class HttpException extends Error {
    constructor(data = null, msg = '系统错误', errorCode = 50000, code = 400) {
        super()
        this.data = data
        this.errorCode = errorCode
        this.code = code
        this.msg = msg
    }
}
/**
 * 请求:参数校验结果失败
 * */
class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400
        this.msg = msg || '请求参数错误'
        this.errorCode = errorCode || 40001
    }
}
/**
 * 响应：成功处理结果返回
 * */
class Success extends HttpException {
    constructor(data, msg, errorCode) {
        super()
        this.data = data || {}
        this.code = 200
        this.msg = msg || 'ok'
        this.errorCode = errorCode || 20000
    }
}
/**
 * 未找到结果返回
 * */
class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 202
        this.msg = msg || '资源未找到'
        this.errorCode = errorCode || 20002
    }
}

module.exports = {
    HttpException,
    ParameterException,
    Success,
    NotFound
}