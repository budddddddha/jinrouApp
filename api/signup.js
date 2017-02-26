/**
 * <API>
 * URL: /api/signup
 */

const express = require('express');
const router = express.Router();

const co = require('co');
const dynamoPutUser = require('../dynamodb/dynamoPutUser');
const dynamoGetUser = require('../dynamodb/dynamoGetUser');
const Boom = require('boom');
const fetchJWT = require('../modules/fetchJWT')
const createUser = require('../modules/createUser')

const getParams = {
  TableName: 'JinrouUser',
  Key: { Id: ''}
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
    const putData = yield dynamoPutUser(putParams);

    getParams.Key.Id = putParams.Item.Id;
    const userData = yield dynamoGetUser(getParams);

    // エラー処理
    if (Object.keys(userData).length === 0) {
      const err = Boom.badImplementation('name or password is not found', {
        message: 'エラーだよ。'
      });

      err.output.payload = Object.assign({}, err.output.payload, err.data);
      const errobj = {err: err}
      return res.send(errobj);
    }

    const jsonWebToken = fetchJWT(userData.Item.Id, userData.Item.Email)
    const User = createUser(userData.Item);
    return res.send([Object.assign({}, User, { jsonWebToken })])
  });
})

module.exports = router;
