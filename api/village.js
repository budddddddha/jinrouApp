/**
 * <API>
 * URL: /api/village
 */

const express = require('express');
const router = express.Router();
const co = require('co');
const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()
const dynamoGetVillage = require('../dynamodb/dynamoGetVillage');
const dynamoPutVillage = require('../dynamodb/dynamoPutVillage');

const params = {
  TableName: 'JinrouVillage',
  Key: { Id: ''}
}

const putParams = {
  TableName: 'JinrouVillage',
  Item: {
    Id: ''
  }
}

const updateParams = {
  TableName: 'JinrouUser',
  Key: {
    'Id': ''
  },
  UpdateExpression: 'add GameData.Villages :v)',
  ExpressionAttributeValues: {
    ":v": ""
  }
}

const isExist = function(members, clientId) {
  for (var i = 0; i < members.length; i++) {
    if (clientId === members[i].Id) {
      return true;
    }
  }
  return false;
}

// 村情報取得
router.post('/fetch', function(req, res) {
  co(function* (){
    const villageId = req.body.villageId;
    const clientId = req.body.clientId;
    params.Key.Id = villageId;
    const villageData = yield dynamoGetVillage(params);

    // エラー処理(村が存在しない)
    if (Object.keys(villageData).length === 0) {
      return res.send(villageData)
    }

    // エラー処理(村のメンバーじゃない)
    if (!isExist(villageData.Item.Members, clientId)) {
      return err
    }

    return res.send(villageData)
  });
})

// 村作成
router.post('/make_village', function(req, res) {
  co(function* (){
    const cliendId = req.body.cliendId;
    const villageId = req.body.villageId;
    const members = req.body.members; // ['k0408n', 'k3468n']
    const setMembers = new Set(members);
    const putMembers = Array.from(setMembers).map(function(v) {
      return {
        Id: v,
        isAlive: true,
        Role: 'Villager'
      }
    })
    putParams.Item.Id = villageId;
    // putParams.Item.Members = dynamo.createSet(members)
    putParams.Item.Members = putMembers;
    putParams.Item.Stage = 'Inviting'
    console.log("putParams=", putParams);
    const villageData = yield dynamoPutVillage(putParams);
    console.log("puted");
    console.log("villageData=", villageData);

    // エラー処理(村が存在しない)
    // if (Object.keys(villageData).length === 0) {
      // return res.send(villageData)
    // }

    // エラー処理(村のメンバーじゃない)
    // if (!isExist(villageData.Item.Members, clientId)) {
      // return err
    // }

    // クライアントのデータに村を追加
    updateParams.Key.Id = cliendId;
    updateParams.ExpressionAttributeValues[":v"] = villageId



    return res.send(putParams)
  });
})

module.exports = router;
