import redis from "redis"
import crypto from 'crypto'

let room_client = redis.createClient()

let getrandom = () => {
  let current_date = Date.now() + ''
  let random = Math.random().toString()
  let hash = crypto.createHash('sha1').update(current_date + random).digest('hex')
  return hash
}

// var room = {
//   'room_id';,
//   'rule_id':,
//   'create_datatime':,
//   'end_datatime':
// }

// 終了
// comment_client.quit();
// room_client.quit();

let setRoom = room => {
  room_client.hmset(
    room.room_id,
    'rule_id', room.version_id,
    "create_datatime", room.datetime,
    "end_datatime", room.datetime
  )
}

let getRoom = (room_id, version) => {
  console.log('getRoom')
  room_client.hgetall(room_id, (err, obj) => {
    console.log('obj',obj)
    return obj
  })
}

let getLatestRoom = room_id => {
  console.log('getLatestRoom')
  room_client.hgetall(room_id, (err, obj) => {
    console.log('obj',obj)
    return obj
  })
}

// module.exports = room;
exports.getRoom = getRoom
exports.getLatestRoom = getLatestRoom
exports.setRoom = setRoom
