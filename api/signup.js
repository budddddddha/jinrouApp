const express = require('express');
const router = express.Router();

const co = require('co');
const jwt = require('jsonwebtoken');
const dynamoPutUser = require('../dynamodb/dynamoPutUser');
const dynamoGetUser = require('../dynamodb/dynamoGetUser');
const Boom = require('boom');
const fetchJWT = require('../modules/fetchJWT')

const vs = new Set(["test"])

const getParams = {
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

const createPutParams = body => {
  return {
    TableName: 'JinrouUser',
    Item: {
      'Id': body.id,
      'Name': body.name,
      'Pass': body.pass,
      'Email': body.mail
    }
  }
}

// サインアップ処理
router.post('/', function(req, res) {
  co(function* (){
    const putParams = createPutParams(req.body)
    console.log("putParams=",putParams);

    const putData = yield dynamoPutUser(putParams);
    console.log("putData=",putData);

    getParams.Key.Id = putParams.Item.Id;
    const userData = yield dynamoGetUser(getParams);
    console.log("userData=",userData);

    if (Object.keys(userData).length === 0) {
      const err = Boom.badImplementation('name or password is not found', {
        message: 'エラーだよ。'
      });

      err.output.payload = Object.assign({}, err.output.payload, err.data);

      const errobj = {err: err}

      return res.send(errobj);
    }

    const jsonWebToken = fetchJWT(userData.Item.Id, userData.Item.Email)
    console.log("jsonWebToken=", jsonWebToken);

    const User = createUser(userData.Item);
    console.log("User=",User);

    return res.send([Object.assign({}, User, { jsonWebToken })])
  });
})

module.exports = router;
