const express = require('express');
const router = express.Router();

const co = require('co');
const jwt = require('jsonwebtoken');
const dynamoGetUser = require('../dynamodb/dynamoGetUser');
const Boom = require('boom');
const fetchJWT = require('../modules/fetchJWT')
const createUser = require('../modules/createUser')

const config = require('config');
const secretKey = config.get("secretKey")

const params = {
  TableName: 'JinrouUser',
  Key: { Id: ''}
}

// ログイン処理(POST)
router.post('/', function(req, res) {
  co(function* () {
    const id    = req.body.id;
    const pass  = req.body.pass;
    params.Key.Id = id;
    const userData = yield dynamoGetUser(params);

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
      const User = createUser(userData.Item);
      return res.send([Object.assign({}, User, { jsonWebToken })])
    }
  });
})

// リロード時のログイン処理(GET)
router.get('/', function(req, res) {
  const jsonWebToken = req.headers.authorization.split(' ')[1];

  // JWT TOKEN取得
  jwt.verify(jsonWebToken, secretKey, (err, decode) => {
    if (err) {
      return res.send(Boom.badImplementation(String(err)));
    }

    co(function* () {
      params.Key.Id = decode.id
      const userData = yield dynamoGetUser(params);
      if (userData.Item.Id === decode.id) {
        const User = createUser(userData.Item);
        res.send([Object.assign({}, User, { jsonWebToken })])
      }

      res.send(Boom.badImplementation('User is not found'))
    });

  });
})

module.exports = router;
