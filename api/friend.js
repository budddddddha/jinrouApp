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

// 友達フェッチ(POST)
router.post('/fetch', function(req, res) {
  co(function* () {
    const id    = req.body.friendId;
    params.Key.Id = id;
    const friendData = yield dynamoGetUser(params);
    console.log("friendData=",friendData);

    // エラー処理
    if (Object.keys(friendData).length === 0) {
      const err = Boom.badImplementation('name or password is not found', {
        message: '入力されたユーザー名やパスワードが正しくありません。確認してからやりなおしてください。'
      });
      err.output.payload = Object.assign({}, err.output.payload, err.data);
      const errobj = {
        err: err
      }
      return res.send(errobj);
    }

    if (friendData.Item.Id === id) {
      const friendUser = createUser(friendData.Item);
      console.log("friendUser=",friendUser);

      return res.send([Object.assign({}, friendUser)])
    }
  });
})

// 友達フェッチ(GET)
router.get('/fetch', function(req, res) {
  co(function* () {
    const id    = req.body.friendId;
    params.Key.Id = id;
    const friendData = yield dynamoGetUser(params);
    console.log("friendData=",friendData);

    // エラー処理
    if (Object.keys(friendData).length === 0) {
      const err = Boom.badImplementation('name or password is not found', {
        message: '入力されたユーザー名やパスワードが正しくありません。確認してからやりなおしてください。'
      });
      err.output.payload = Object.assign({}, err.output.payload, err.data);
      const errobj = {
        err: err
      }
      return res.send(errobj);
    }

    if (friendData.Item.Id === id) {
      const friendUser = createUser(friendData.Item);
      console.log("friendUser=",friendUser);

      return res.send([Object.assign({}, friendUser)])
    }
  });
})

module.exports = router;
