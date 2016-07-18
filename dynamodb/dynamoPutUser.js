const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()

const dynamoPutUser = params => {
  console.log("dynamoPutUser");
  return new Promise((resolve) => {
    dynamo.put(params, (err, data) => {
      console.log("data=",data);
      console.log("err=",err);
      resolve(data)
    })
  })
}

module.exports = dynamoPutUser
