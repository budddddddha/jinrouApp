'use strict';

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var room_client = _redis2.default.createClient();

var getrandom = function getrandom() {
  var current_date = Date.now() + '';
  var random = Math.random().toString();
  var hash = _crypto2.default.createHash('sha1').update(current_date + random).digest('hex');
  return hash;
};

// var room = {
//   'room_id';,
//   'rule_id':,
//   'create_datatime':,
//   'end_datatime':
// }

// 終了
// comment_client.quit();
// room_client.quit();

var setRoom = function setRoom(room) {
  room_client.hmset(room.room_id, 'rule_id', room.version_id, "create_datatime", room.datetime, "end_datatime", room.datetime);
};

var getRoom = function getRoom(room_id, version) {
  console.log('getRoom');
  room_client.hgetall(room_id, function (err, obj) {
    console.log('obj', obj);
    return obj;
  });
};

var getLatestRoom = function getLatestRoom(room_id) {
  console.log('getLatestRoom');
  room_client.hgetall(room_id, function (err, obj) {
    console.log('obj', obj);
    return obj;
  });
};

// module.exports = room;
exports.getRoom = getRoom;
exports.getLatestRoom = getLatestRoom;
exports.setRoom = setRoom;