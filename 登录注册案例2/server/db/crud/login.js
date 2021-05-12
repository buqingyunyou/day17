
const userModel = require('../model');

function findUser(user,password){
  // find没有写回调函数时, 返回的是一个promise对象
  // 如果能够找到用户名和密码, 则返回的promise成功的值是一个对象
  // 如果找不到用户名和密码, 则返回的promise成功的值为null
  return userModel.findOne({user,password});

  // 注意: findeOne和find,查询到的结果不一样: findOne返回的是对象,find是数组,数组中的元素是对象
}

module.exports.findUser = findUser;