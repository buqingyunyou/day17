const userModel = require('../model');

function addUser(user,password){
  return userModel.create({
    user,
    password
  })
}

module.exports.addUser = addUser;