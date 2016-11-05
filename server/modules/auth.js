var cache = require('memory-cache');
var argon2 = require('argon2');

var exports = module.exports = {};

exports.hashPassword = function (password) {
    return argon2.generateSalt().then(salt => {
        return argon2.hash(password, salt).then(hash => {
            return hash;
        });
    });
};

exports.checkPassword = function (hash, password) {
    return argon2.verify(hash, password).then(match => {
        if (match) {
            return true;
        } else {
            return false;
        }
    }).catch(err => {
        console.log(err);
        return false;
    });
}