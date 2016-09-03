const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const docClient = new AWS.DynamoDB.DocumentClient()
// var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

var params = {
    TableName: 'JinrouUser',
    Item: {
        Id: "set",
        hashkey: 'key',
        stringSet: docClient.createSet(['a', 'b']),
        numberSet: docClient.createSet([1, 2]),
        binarySet: docClient.createSet([new Buffer(5), new Uint8Array(5)])
    }
};

docClient.put(params, function(err, data){
    if (err) console.log(err);
    else console.log(data);
});
