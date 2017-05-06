const jinrouUser = require('./JinrouUser');
const dynamoGetUser = require('../dynamodb/dynamoGetUser');
const co = require('co');

const j = new jinrouUser();
// console.log("getData=", j.getData());
// const setParams = {
//   Id: "hogeID",
//   Name: "hogeName",
//   Email: "hogeEmail",
//   Pass: "hogePass"
// }
// j.setData(setParams);
// console.log("getData=", j.getData());
// console.log(j.dynamo);
// const get = yield j.get("Id", "k0408n");
// console.log("get=", get);
co(function* () {
  const usr = yield j.get("Id", "k0408n");
  console.log("usr=", usr);
})
