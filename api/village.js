const express = require('express');
const router = express.Router();

const co = require('co');
const dynamoGetVillage = require('../dynamodb/dynamoGetVillage');

const params = {
  TableName: 'JinrouVillage',
  Key: { Id: ''}
}

router.post('/', function(req, res) {
  co(function* (){
    const id = req.body.id;
    params.Key.Id = id;
    const villageData = yield dynamoGetVillage(params);

    if (true) {
      return res.send(villageData)
    }
  });
})

module.exports = router;
