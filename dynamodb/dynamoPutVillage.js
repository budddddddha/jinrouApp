const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()

// const params = {
//   TableName: 'JinrouVillage',
//   Item: { Id: 'maketest'}
// }

const dynamoPutVillage = params => {
  return new Promise((resolve) => {
    dynamo.put(params, (err, data) => {
      resolve(data)
    })
  })
}

// dynamoPutVillage(params);

module.exports = dynamoPutVillage
