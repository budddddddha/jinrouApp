/**
 * <API>
 * URL: /api/search_user
 */

const express = require('express');
const router = express.Router();

const co = require('co');
const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()
const dynamoGetUser = require('../dynamodb/dynamoGetUser');
const dynamoAddSetUser = require('../dynamodb/dynamoAddSetUser')
const dynamoPutUser = require('../dynamodb/dynamoPutUser');
const Boom = require('boom');
const createUser = require('../modules/createUser')

const params = {
  TableName: 'JinrouUser',
  Key: { Id: ''}
}

// ユーザ検索
router.post('/', function(req, res) {
  co(function* () {
    const id = req.body.id;
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

    if (userData.Item.Id === id) {
      const User = createUser(userData.Item);
      return res.send(Object.assign({}, User))
    }
  });
})

const updateParams = {
    TableName: 'JinrouUser',
    Key: {"Id": ""},
    UpdateExpression: "",
    ExpressionAttributeValues: {}
};

// 友達申請
router.post('/friend_request', function(req, res) {
  co(function* () {
    const fromId = req.body.fromId;
    const toId = req.body.toId;

    // 相手が友達申請していたら -> 友達成立
    // params.Key.Id = fromId;
    // const hogeparams = {
    //   "TableName": "JinrouUser",
    //   "Key": { "Id": fromId}
    // }
    // const fromUserData = yield dynamoGetUser(hogeparams);
    // const hogeparams = {
    //   "TableName": "JinrouUser",
    //   "Key": { "Id": toId}
    // }
    // const toUserData = yield dynamoGetUser(hogeparams);
    //
    // const toUserFriendRequests = toUserData.Item.GameData.ToFriendRequests.values;
    // if (toUserFriendRequests.indexOf(fromId)) {
    //     // 友達の結びつけ
    //     const newFromFriendRequests = fromUserData.Item.GameData.FromFriendRequests;
    //     for (var i = 0; i < newFromFriendRequests.length; i++) {
    //       const req = newFromFriendRequests[i];
    //       if (req === toId) {
    //         newFromFriendRequests.splice(i,1);
    //       }
    //     }
    //     const newToFriendRequests = fromUserData.Item.GameData.ToFriendRequests;
    //     for (var i = 0; i < newToFriendRequests.length; i++) {
    //       const req = newToFriendRequests[i];
    //       if (req === toId) {
    //         newToFriendRequests.splice(i,1);
    //       }
    //     }
    //     const createPutParams = body => {
    //       return {
    //         TableName: 'JinrouUser',
    //         Item: {
    //           GameData: {
    //             Friends: fromUserData.Item.GameData.Friends.push(toId),
    //             FromFriendRequests: newFromFriendRequests,
    //             ToFriendRequests: newToFriendRequests
    //           }
    //         }
    //       }
    //     }
    //     const putParams = createPutParams()
    //     const putRequestParams = Object.assign({}, fromUserData, putParams, {
    //       UpdateExpression: "add GameData.ToFriendRequests :v",
    //       ExpressionAttributeValues: {
    //         ":v": dynamo.createSet([toId])
    //       }
    //     });
    //     const putData = yield dynamoPutUser(putRequestParams);
    //
    //     return res.send("hori!!!");
    // }

    params.Key.Id = toId;
    const toUserData = yield dynamoGetUser(params);
    console.log("toUserData=", toUserData);
    // return res.send(toUserData);

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
    return res.send("");
  })
})

module.exports = router;
