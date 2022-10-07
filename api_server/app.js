// 导入 express 模块
const express = require('express')
const app = express()

// 导入 cors 中间件
const cors = require('cors')
app.use(cors())

//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use( express.urlencoded({ extended: false }))

// 响应数据的中间件
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 导入并使用用户信息路由模块
const indexInfoRouter = require('./router/indexInfo')
app.use('/publish', indexInfoRouter)

const userInfo = require('./router/userInfo')
app.use('/my', userInfo)

app.listen(3007, function () {
  console.log('api server running at http://127.0.0.1:3007')
})