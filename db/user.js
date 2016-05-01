'use strict';

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// リスト型 <key: room_id, value: comment_id, comment_id, comment_id, ...>
var user_client = _redis2.default.createClient();

// 初期化
user_client.flushdb();

var user = {
  'user_id': 1,
  'user_name': 'budddddddha',
  'user_type': 'super'
};

// ユーザデータをセット
var set_user = function set_user(user) {
  user_client.hmset(user.user_id, 'name', user.user_name, 'type', user.user_type);
};

var get_users = function get_users(user) {
  user_client.hgetall(user.user_id, function (err, obj) {
    console.log("user_id: " + user.user_id);
    console.log(obj);
  });
};

set_user(user);
get_users(user);

// 文字列のkey-valueとして値を格納。key:key1、value:val1
user_client.set("user_id", "1");

// 格納した値を取得。 key: key1
user_client.get("user_id", function (err, obj) {
  console.log("get key1: " + obj);
});

user_client.quit();