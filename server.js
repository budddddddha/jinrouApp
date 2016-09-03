var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('./webpack.config')

var bodyParser = require('body-parser');

var app = new (require('express'))()
var port = 3000

var compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// api routes
const login = require('./api/login');
const signup = require('./api/signup');
const friend = require('./api/friend');
const village = require('./api/village');
const user = require('./api/user');

// api routing
app.use('/api/login', login);
app.use('/api/signup', signup);
app.use('/api/friend', friend);
app.use('/api/village', village);
app.use('/api/user', user);

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
