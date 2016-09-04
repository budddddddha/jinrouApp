var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('./webpack.config')

var bodyParser = require('body-parser');

var app = new (require('express'))()
var port = 3000

var SocketIo = require('socket.io');

var compiler = webpack(webpackConfig)
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
const user = require('./api/user');
const socket = require('./api/socket');

// api routing
app.use('/api/login', login);
app.use('/api/signup', signup);
app.use('/api/friend', friend);
app.use('/api/village', village);
app.use('/api/user', user);
app.use('/api/socket', socket);

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

const server = app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

// Socket
const io = SocketIo(server)
const userSocket = io.of('/socket/user').on('connection', function(socket) {
  const id = socket.id;
  console.log("socket.id=", id);
  userSocket.to(id).emit('news', { hello: id });
  // socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
const villageSocket = io.of('/socket/village').on('connection', function(socket) {
  const room = ''
  socket.on('client_to_server_join', function(data) {
    console.log("client_to_server_join");
    room = data.villageId;
    socket.join(room);
    });
  socket.on('client_to_server_broadcast', function(data) {
    console.log("client_to_server_broadcast");
    socket.broadcast.to(room).emit('server_to_client', {value : data.value});
  })
});

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });
