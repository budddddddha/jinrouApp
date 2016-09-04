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

// 村情報取得
router.post('/', function(req, res) {
  co(function* (){
    const villageId = req.body.villageId;
    const authId = req.body.authId;
    params.Key.Id = villageId;
    const villageData = yield dynamoGetVillage(params);

    // エラー処理(村が存在しない)
    if (Object.keys(villageData).length === 0) {
      return res.send(villageData)
    }

    // エラー処理(村のメンバーじゃない)
    if (!isExist(villageData.Item.Members, authId)) {
      return err
    }
    
    return res.send(villageData)
  });
})

module.exports = router;
