const Koa = require('koa');
const bodyParser = require('koa-bodyparser')//POST请求参数获取中间件
const cors = require('koa2-cors')//Koa2使用CORS完成跨域及解决OPTIONS请求
const staticCache = require('koa-static-cache')//静态资源中间件
const helmet = require("koa-helmet")//通过设置Http头来使应用程序更加安全

const config = require('./config')//全局配置
const { corsHandler } = require('./middlewares/cors')//跨域配置中间件
const { loggerMiddleware } = require('./middlewares/logger')//输出日志中间件
const errorHandler = require('./middlewares/exception')//全局异常捕获中间件
const InitManager = require('./core/init')//初始化管理器

const app = new Koa();
// Logger handler
app.use(loggerMiddleware)

// Error handler
app.use(errorHandler)

// Post request handler
app.use(bodyParser())

// Helmet
app.use(helmet())

// Cors handler
app.use(cors(corsHandler))

// Static Cache handler
app.use(staticCache(config.publicDir))

// Init Manager
InitManager.initCore(app)

app.listen(3000);