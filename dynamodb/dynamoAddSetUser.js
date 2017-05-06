const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()

var params = {
    TableName: 'JinrouUser',
    Key: {
        "Id": "k0408n"
    },
    // UpdateExpression: "add GameData.ToFriendRequests :v",
    // ExpressionAttributeValues: {
      // ":v": dynamo.createSet(["ie"])
    // },
    // ReturnValues:"UPDATED_NEW"
};

const dynamoAddSetUser = params => {
  return new Promise((resolve) => {
    dynamo.get(params, (err, data) => {
      console.log("hoge", params);
      resolve(data)
    })
  })
}
const co = require('co');
co(function* () {
  const request = yield dynamoAddSetUser(params);
  console.log("request=", request);
});



// module.exports = dynamoAddSetUser
