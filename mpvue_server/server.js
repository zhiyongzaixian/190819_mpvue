// 使用前要安装： koa koa-router

let Koa = require('koa')
let KoaRouter = require('koa-router')


// 1. 生成应用
const app = new Koa();

// 2. 生成路由器
const router = new KoaRouter()


// 测试
// express回顾
// router.get('/', (req,  res,  next) => {
//   // req: 请求的信息
//   // res: 响应的对象
//   // next: 负责调用下一个回调
//   // res.send() 返回数据
// });

// Koa
router.get('/', (ctx, next) => {
  // ctx 等同于： req + res
  
  ctx.body = '服务器测试返回的数据'
});



// 1. 搜索图书的接口
let datas = require('./datas/data.json');
router.get('/searchBooks', (ctx, next) => {
  // 1. 获取请求的参数
  let req = ctx.query.req
  // 2. 处理请求数据
  if(!req){ // 没有参数携带
    ctx.body = {
      code: 1,
      data: '请输入有效的参数'
    }
  }else {
    // 3. 返回相应数据
    ctx.body = {
      code: 0,
      data: datas
    }
  }
  
})


















// 3. 安装路由器，声明使用中间键
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 允许使用路由的方法


// 4. 监听端口号
app.listen('3000', () => {
  console.log('服务器启动成功了');
  console.log('服务器地址： http://localhost:3000');
})
