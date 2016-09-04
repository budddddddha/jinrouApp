const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()

const dynamoPutUser = params => {
  return new Promise((resolve) => {
    dynamo.put(params, (err, data) => {
      resolve(data)
    })
  })
}

module.exports = dynamoPutUser
