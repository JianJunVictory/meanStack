const crypto = require("crypto");
module.exports = {
    uri: "mongodb://192.168.232.128:27017/" + this.db,
    db: 'users',
    secret: crypto.randomBytes(256).toString('hex')
}