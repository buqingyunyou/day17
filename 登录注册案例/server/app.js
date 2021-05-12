/**
 * 注册整体流程:
 *  第一步: 运行app.js文件 (借助nodemon工具,或者直接node命令)
 *  第二步: 引入express包,返回express(函数/对象),加载到内存中
 *  第三步: 引入model下的index.js文件,返回userModel对象,加载到内存中
 *  第四步: 引入conndb下的index.js文件,返回promise对象,并在此阻塞,直到数据库连接成功(promise对象状态修改为成功),才往下执行
 *  第五步: 输出"数据库连接成功"提示
 *  第六步: 调用express函数,返回一个app应用对象(服务器对象)
 *  第七步: 执行app.use(express.urlencoded({extended:true})), 返回一个中间件回调函数,该函数(只有在客户端发POST请求过来时才被调用)
 *  第八步: 执行app.use(express.static('../public')), 返回一个中间件回调函数,该函数(只有在客户端请求静态资源时,才被调用)
 *  第九步: 将app.post(...)加载到内存, 路由回调函数(只有在客户端发POST请求时才被调用)
 *  第十步: app.listen(...)开启服务监听,成功则提示成功,失败则提示服务器启动失败,并输出错误信息
 */

;
(async function () {
  // 导入express
  const express = require('express');
  // 导入model集合对象
  // const userModel = require('./db/model');
  // 导入register.js,通过解构拿到函数addUser
  // const {addUser} = require('./db/crud/register');
  // 导入login.js,通过解构拿到函数findUser
  // const {findUser} = require('./db/crud/login');
  // 导入logicRouter.js
  const loginRouter = require('./router/loginRouter');
  // console.log(loginRouter);

  // 导入并连接数据库
  await require('./db/conndb');
  console.log('数据库连接成功');

  const app = express();
  // 开启静态资源
  app.use(express.urlencoded({extended:true}));
  app.use(express.static('../public'));

  // 开启路由
  app.use(loginRouter);

  app.listen(5000, (err) => {
    if (err) console.log('错误', err);
    else console.log("服务器启动成功");
  })
})()