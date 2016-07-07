const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()

const dynamoGetUser = params => {
  return new Promise((resolve, reject) => {
    dynamo.get(params, (err, data) => {
      if (err)  reject(err)
      else      resolve(data)
    })
  })
}

module.exports = dynamoGetUser
