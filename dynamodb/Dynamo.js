"use strict";
/**
 * <DynamoDBラッパーベースクラス>
 */

const AWS = require('aws-sdk')
AWS.config.region = 'ap-northeast-1'
const client = new AWS.DynamoDB.DocumentClient()

class Dynamo {
  constructor(tableName) {
    this.client = client;
    this.params = {
      TableName: tableName,
    }
  }

  // Get
  // var params = {
  //   TableName : 'JinrouUser',
  //   Key: {
  //       'id': 'k0408n'
  //   }
  // };
  get(key, value) {
    const getParams = {
      Key: {
        [key]: value
      }
    }
    const params = Object.assign({}, this.params, getParams);
    return new Promise((resolve) => {
      this.client.get(params, (err, data) => {
        resolve(data)
      })
    })
  }

  // Query
  // var params = {
  //     TableName : 'test_1',
  //     KeyConditionExpression: "#hash = :str",
  //     ExpressionAttributeNames:{
  //         "#hash": "key"
  //     },
  //     ExpressionAttributeValues: {
  //         ":str": "Takagaki_Kaede"
  //     }
  // };
  query(key, value) {
    return new Promise((resolve) => {
      dynamo.query(params, (err, data) => {
        resolve(data)
      })
    })
  }

  // Create

  // Update
  update(params) {
    return new Promise((resolve) => {
      dynamo.update(params, (err, data) => {
        resolve(data)
      })
    })
  }
}

module.exports = Dynamo;
