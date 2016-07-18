const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()

const dynamoGetUser = params => {
  return new Promise((resolve) => {
    dynamo.get(params, (err, data) => {
      resolve(data)
    })
  })
}

module.exports = dynamoGetUser
