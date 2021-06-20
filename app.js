const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError=require('./middlewares/exception')

const app = new Koa();
app.use(catchError)//全局异常捕获
app.use(bodyParser())//请求头参数获取
InitManager.initCore(app)// 初始化管理器
app.listen(3000);