const express = require('express');
// 导入register.js,通过解构拿到函数addUser
const {addUser} = require('../db/crud/register');
// 导入login.js,通过解构拿到函数findUser
const {findUser} = require('../db/crud/login');

// 创建router对象
const loginRouter = express.Router();

// 通过router对象配置路由

// 注册逻辑
loginRouter.post('/register', async (req, res) => {
  // 获取客户端上传的数据,解构赋值
  const {username,password} = req.body;
  // 将获取到的用户注册信息,添加到数据库(如果无回调,则返回promise)
  await addUser(username,password);
  // 数据成功添加到数据库后, 才会响应注册成功信息给客户端
  res.send('注册成功,<a href="http://127.0.0.1:5000/login/index.html">点击登录</a>');
})

// 登录逻辑
loginRouter.post('/login', async (req, res) => {
  // 获取客户端上传的数据,解构赋值
  const {username,password} = req.body;
  // await + promise对象, 会直接返回成功数据
  const data = await findUser(username,password);
  // 判断拿到的数据是否为null
  if(data){
    // 如果有数据,让页面进行跳转, 重定向到首页 (重定向是响应重定向)
    // 重定向时,将当前的用户名,通过url形式传递到重定向后的地址栏中,最终在重定向页面渲染时拿到user进行动态渲染
    res.redirect('http://127.0.0.1:5000/home/index.html?username='+data.user);
  }else{
    // 如果没有数据,即返回的data为null
    res.send('登录失败,用户名或密码错误')
  }

})


// 将router对象导出
module.exports = loginRouter;

