const express = require('express');
const {findUser} = require('../db/crud/login');

// 创建router对象
const uiRouter = express.Router();

// 设置路由
uiRouter.get('/home',(req,res)=>{
  // 获取客户端上传的数据,解构赋值
  const {username,password} = req.body;
  res.render('index',{username:'sz'})
})

module.exports = uiRouter;

