class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode = 50000, code = 400) {
        super()
        this.errorCode = errorCode
        this.code = code
        this.msg = msg
    }
}

/**
 * 请求参数校验结果返回
 * */ 
class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400
        this.msg = msg || '请求参数错误'
        this.errorCode = errorCode || 20001
    }
}


/**
 * 响应处理结果返回
 * */ 
class Success extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 200
        this.msg = msg || 'ok'
        this.errorCode = errorCode || 20000
    }
}

module.exports = {
    HttpException,
    ParameterException,
    Success
}