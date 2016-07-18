const express = require('express');
const router = express.Router();

const co = require('co');
const jwt = require('jsonwebtoken');
const dynamoGetUser = require('../dynamodb/dynamoGetUser');
const Boom = require('boom');
const fetchJWT = require('../modules/fetchJWT')

const config = require('config');
const secretKey = config.get("secretKey")

const params = {
  TableName: 'JinrouUser',
  Key: { Id: ''}
}

const createUser = function(item) {
  const user = {
    id  : item.Id || undefined,
    name: item.Name || undefined,
    pass: item.Pass || undefined,
    mail: item.Email || undefined
  }
  user.gameData = {}
  if ('GameData' in item) {
    if ('Villages' in item.GameData) {
      user.gameData.villages = item.GameData.Villages
    } else {
      user.gameData.villages = []
    }
  } else {
    user.gameData.villages = []
  }
  return user;
}

// ログイン処理
router.post('/', function(req, res) {

  co(function* () {
    const id    = req.body.id;
    const pass  = req.body.pass;
    params.Key.Id = id;
    const userData = yield dynamoGetUser(params);
    console.log("userData=",userData);

    // エラー処理
    if (Object.keys(userData).length === 0) {
      const err = Boom.badImplementation('name or password is not found', {
        message: '入力されたユーザー名やパスワードが正しくありません。確認してからやりなおしてください。'
      });
      err.output.payload = Object.assign({}, err.output.payload, err.data);
      const errobj = {
        err: err
      }
      return res.send(errobj);
    }

    if (userData.Item.Id === id && userData.Item.Pass === pass) {
      const jsonWebToken = fetchJWT(userData.Item.Id, userData.Item.Email)
      console.log("jsonWebToken=",jsonWebToken);
      console.log("userData.Item=",userData.Item);
      const User = createUser(userData.Item);
      console.log("User=",User);

      return res.send([Object.assign({}, User, { jsonWebToken })])
    }
  });
})

// リロード時の処理
router.get('/', function(req, res) {
  console.log("リロード");

  const jsonWebToken = req.headers.authorization.split(' ')[1];

  jwt.verify(jsonWebToken, secretKey, (err, decode) => {
    if (err) {
      return res.send(Boom.badImplementation(String(err)));
    }
    console.log("ほり!!!");

    co(function* () {
      params.Key.Id = decode.id
      console.log("decode.id=",decode.id);
      const userData = yield dynamoGetUser(params);
      console.log("userData=",userData.Item);

      if (userData.Item.Id === decode.id) {
        const User = createUser(userData.Item);
        console.log("User!!!",User);

        res.send([Object.assign({}, User, { jsonWebToken })])
      }

      res.send(Boom.badImplementation('User is not found'))
    });

  });
})

module.exports = router;
