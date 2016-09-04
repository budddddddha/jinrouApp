const express = require('express');
const router = express.Router();

const co = require('co');
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()
const dynamoGetUser = require('../dynamodb/dynamoGetUser');
const dynamoAddSetUser = require('../dynamodb/dynamoAddSetUser')
const Boom = require('boom');
const fetchJWT = require('../modules/fetchJWT')
const createUser = require('../modules/createUser')

const config = require('config');
const secretKey = config.get("secretKey")

const params = {
  TableName: 'JinrouUser',
  Key: { Id: ''}
}

// ログイン処理
router.post('/search', function(req, res) {

  co(function* () {
    const id = req.body.id;
    params.Key.Id = id;
    console.log("params=",params);
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

    if (userData.Item.Id === id) {
      const User = createUser(userData.Item);
      console.log("User=",User);

      return res.send(Object.assign({}, User))
    }
  });
})

const updateParams = {
    TableName: 'JinrouUser',
    Key: {"Id": ""},
    // UpdateExpression: "add GameData.ToFriendRequests :v",
    UpdateExpression: "",
    // ExpressionAttributeValues: {
    //   ":v": dynamo.createSet(["ie"])
    // },
    ExpressionAttributeValues: {}
    // ReturnValues:"UPDATED_NEW"
};

router.post('/friend_request', function(req, res) {
  console.log("friend_request");
  co(function* () {
    const fromId = req.body.fromId;
    console.log("fromId=", fromId);
    const toId = req.body.toId;
    console.log("toId=", toId);

    // 友達申請の申し込み
    const requestParams = Object.assign({}, updateParams, {
      Key: {
        Id: fromId
      },
      UpdateExpression: "add GameData.ToFriendRequests :v",
      ExpressionAttributeValues: {
        ":v": dynamo.createSet([toId])
      }
    });
    console.log("requestParams1=",requestParams);

    // 友達申請の受け取り
    const requestedParams = Object.assign({}, updateParams, {
      Key: {
        Id: toId
      },
      UpdateExpression: "add GameData.FromFriendRequests :v",
      ExpressionAttributeValues: {
        ":v": dynamo.createSet([fromId])
      }
    });

    const request = yield dynamoAddSetUser(requestParams);
    const requested = yield dynamoAddSetUser(requestedParams);

    return res.send("")
  })
})

module.exports = router;