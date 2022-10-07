// 导入数据库操作模块
const db = require('../db/index')
// 根据用户的 id，查询用户的基本信息
// 注意：为了防止用户的密码泄露，需要排除 password 字段
const sql1 = `select * from publish_data `
const sql2 = 'select * from publish_data order by rand()'

// 获取用户基本信息的处理函数
exports.getIndexInfo = (req, res) => {
  // 注意：req 对象上的 user 属性，是 Token 解析成功，express-jwt 中间件帮我们挂载上去的
  db.query(sql2, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err)

    for (let i = 0; i < results.length; i++) {
      results[i].picInfo = results[i].picInfo.split('&')
      results[i].otherInfo = results[i].otherInfo.split('&')
    }
    // 3. 将用户信息响应给客户端
    res.send({
      status: 0,
      message: '获取用户基本信息成功！',
      data: results.slice(0,5),
    })
  })
}

// 更新用户基本信息的处理函数
exports.updateTopIndexInfo = (req, res) => {
  // 注意：req 对象上的 user 属性，是 Token 解析成功，express-jwt 中间件帮我们挂载上去的
  db.query(sql2, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err)

    for (let i = 0; i < results.length; i++) {
      results[i].picInfo = results[i].picInfo.split('&')
      results[i].otherInfo = results[i].otherInfo.split('&')
    }
    // 3. 将用户信息响应给客户端
    res.send({
      status: 0,
      message: '获取用户基本信息成功！',
      data: results.slice(0,2),
    })
  })
}