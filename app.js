const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const staticCache = require('koa-static-cache')
const helmet = require("koa-helmet")

const config = require('./config')
const { corsHandler } = require('./middlewares/cors')
const { loggerMiddleware } = require('./middlewares/logger')
const errorHandler = require('./middlewares/exception')
const InitManager = require('./core/init')

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