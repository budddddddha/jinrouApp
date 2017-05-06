"use strict";
/**
 * <Model>
 * ベースモデル
 */

const Dynamo = require('../dynamodb/Dynamo');
const co = require('co');
const dynamoGetUser = require('../dynamodb/dynamoGetUser');

class Base {
  // 各モデルのprops(基本情報)からデフォルト値でインスタンスを生成
  constructor(props, tableName) {
    this.props = props;
    this.data = {};
    for (var p in props) {
      this.data[p] = p.default;
    }
    this.dynamo = new Dynamo(tableName);
  }

  // paramsを渡してモデルにセット
  setData(params) {
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        this.data[key] = params[key];
      }
    }
  }

  // 取得メソッド
  getData() {
    return this.data;
  }

  get(key, value) {
      // const params = {
      //   TableName: 'JinrouUser',
      //   Key: {
      //       "Id": "k0408n"
      //   }
      // }
      // return dynamoGetUser(params);
      // return friendData;
      // co(function* () {
        return this.dynamo.get(key, value);
        // return g;
      // })
      // return g;
    // const getData = this.dynamo.get(key, value);
    // this.data = Object.assign({}, this.data, getData);
  }

  query() {
    return this.dynamo.query();
  }

  // 型でバリデーション
  validate() {
    const result = {err: false, key: null};
    for (var d in this.data) {
      const type = this.props[d].type;
      if (!(typeof d === 'string' || d instanceof String)) {
        result = {err: true, key: d};
        break;
      }
    }
    return result;
  }
}

module.exports = Base;
