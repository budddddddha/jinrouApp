const express = require('express');
const router = express.Router();

const co = require('co');
const dynamoGetVillage = require('../dynamodb/dynamoGetVillage');

const params = {
  TableName: 'JinrouVillage',
  Key: { Id: ''}
}

const isExist = function(members, authId) {
  for (var i = 0; i < members.length; i++) {
    if (authId === members[i].Id) {
      return true;
    }
  }
  return false;
}

router.post('/', function(req, res) {
  console.log("vivivi");
  co(function* (){
    const villageId = req.body.villageId;
    const authId = req.body.authId;
    params.Key.Id = villageId;
    console.log("params=",params);
    const villageData = yield dynamoGetVillage(params);
    console.log("villageData=",villageData);

    if (Object.keys(villageData).length === 0) {
      console.log("村が存在しない");
      return res.send(villageData)
    }
    console.log("villageData.Item.Members=",villageData.Item.Members);
    if (isExist(villageData.Item.Members, authId)) {
      console.log("OK");
      return res.send(villageData)
    } else {
      console.log("メンバーじゃない");
      return err
    }

  });
})

module.exports = router;
