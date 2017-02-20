/**
 * サーバ側のエントリー
 */

// webpack
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('./webpack.config')

// アプリの設定
var app = new (require('express'))()
var compiler = webpack(webpackConfig)
var bodyParser = require('body-parser')
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', require('express').static(__dirname + '/public'));

// api routes
const login = require('./api/login');
const signup = require('./api/signup');
const friend = require('./api/friend');
const village = require('./api/village');
const searchUser = require('./api/searchUser');

// api routing
app.use('/api/login', login);
app.use('/api/signup', signup);
app.use('/api/friend', friend);
app.use('/api/village', village);
app.use('/api/search_user', searchUser);
app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

// 起動
var port = 3000
const server = app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

// SocketIo
var SocketIo = require('socket.io');
const io = SocketIo(server)
const userSocket = io.of('/socket/user').on('connection', function(socket) {
  const id = socket.id;
  userSocket.to(id).emit('to_user_msg', { toUserMsg: id });
  socket.on('from_user_msg', function (data) {
    console.log("from_user_msg=", data);
  });
});
const villageSocket = io.of('/socket/village').on('connection', function(socket) {
  const room = ''
  socket.on('village_join', function(data) {
    console.log("village_join");
    room = data.villageId;
    socket.join(room);
    });
  socket.on('village_broadcast', function(data) {
    console.log("village_broadcast");
    socket.broadcast.to(room).emit('broadcast_to_village_user', {value : data.value});
  })
});
