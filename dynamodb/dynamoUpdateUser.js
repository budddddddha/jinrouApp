const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const dynamo = new AWS.DynamoDB.DocumentClient()

var params = {
    TableName: 'JinrouUser',
    Key: {
        "Id": "eee"
    },
    // createSet(['a', 'b'])
    UpdateExpression: 'set FromRequest = list_append(FromRequest, :fr)',
    ExpressionAttributeValues: {
      ":fr": ["k0408n"]
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("dynamoUpdataUser");

// const dynamoUpdataUser = params => {
const dynamoUpdataUser = () => {
  // return new Promise((resolve) => {
    dynamo.update(params, (err, data) => {
      console.log("err=",err);
      console.log("data=",data);
      // resolve(data)
    })
  // })
}

dynamoUpdataUser();

// module.exports = dynamoUpdataUser

// dynamodb.updateItem(params, function (err, res) {
    // php.var_dump(err);
    // php.var_dump(res);
// });
