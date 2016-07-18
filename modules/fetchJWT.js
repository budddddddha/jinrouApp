const config = require('config');
const secretKey = config.get("secretKey")
const jwt = require('jsonwebtoken')

const fetchJWT = (id, mail) => {
  const jsonWebToken = jwt.sign({
    id  : id,
    mail: mail
  }, secretKey);
  return jsonWebToken
}

module.exports = fetchJWT;
