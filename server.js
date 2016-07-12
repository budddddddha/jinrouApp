var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('config');
var webpackConfig = require('./webpack.config')

const jwt = require('jsonwebtoken');
const co = require('co');
const dynamoGetUser = require('./dynamodb/dynamoGetUser');
const dynamoGetVillage = require('./dynamodb/dynamoGetVillage');
const secretKey = config.get('secretKey')
const Boom = require('boom');

var bodyParser = require('body-parser');

var app = new (require('express'))()
var port = 3000

var compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const params = {
  TableName: 'JinrouUser',
  Key: { Id: ''}
}

const villageParams = {
  TableName: 'JinrouVillage',
  Key: { Id: ''}
}

const createUser = function(item) {
  const user = {
    id  : item.Id,
    name: item.Name,
    pass: item.Pass,
    mail: item.Email,
    gameData: {
      villages: item.GameData.Villages.values
    }
  }
  return user;
}

// ログイン処理
app.post('/api/login', function(req, res) {

  co(function* (){
    const id = req.body.id;
    const pass = req.body.pass;
    params.Key.Id = id;
    const userData = yield dynamoGetUser(params);

    if (userData.Item.Id === id && userData.Item.Pass === pass) {
      const jsonWebToken = jwt.sign({
        id  : userData.Item.Id,
        mail: userData.Item.Email
      }, secretKey);

      const User = createUser(userData.Item);

      return res.send([Object.assign({}, User, { jsonWebToken })])

    }

    const err = Boom.badImplementation('name or password is not found', {
      message: '入力されたユーザー名やパスワードが正しくありません。確認してからやりなおしてください。'
    });
    err.output.payload = Object.assign({}, err.output.payload, err.data);

    return res.send(err);
  });
})

// リロード時の処理
app.get('/api/login', function(req, res) {

  const jsonWebToken = req.headers.authorization.split(' ')[1];

  jwt.verify(jsonWebToken, secretKey, (err, decode) => {
    if (err) {
      return res.send(Boom.badImplementation(String(err)));
    }

    co(function* (){
      params.Key.Id = decode.id
      const userData = yield dynamoGetUser(params);

      if (userData.Item.Id === decode.id) {
        const User = createUser(userData.Item);
        console.log("User",User);

        res.send([Object.assign({}, User, { jsonWebToken })])

      }

      res.send(Boom.badImplementation('User is not found'))

    });

  });
})

app.post('/api/village', function(req, res) {
  console.log('/api/village');

  co(function* (){
    const id = req.body.id;
    console.log("hori",id);
    // const pass = req.body.pass;
    villageParams.Key.Id = id;
    const villageData = yield dynamoGetVillage(villageParams);
    console.log("villageData=",villageData);

    if (true) {
      return res.send(villageData)
    }
  });
})


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
