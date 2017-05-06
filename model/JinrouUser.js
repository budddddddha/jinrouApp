"use strict";
/**
 * <Model>
 * 人狼ユーザー
 */

const Base = require('./Base');

const props = {
  Id: {
    type: "string",
    default: ""
  },
  Name: {
    type: "string",
    default: ""
  },
  Email: {
    type: "string",
    default: ""
  },
  Pass: {
    type: "string",
    default: ""
  }
}

const tableName = 'JinrouUser'

class JinrouUser extends Base {
  constructor() {
    super(props, tableName);
  }
}

module.exports = JinrouUser;
