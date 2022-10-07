// 导入数据库操作模块
const db = require('../db/index')

const sql1 = `select * from user_info `
const sql2 = `update user_info set reshui=reshui+1 where id=1`

exports.getUserInfo = (req, res) => {
  db.query(sql1, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 3. 将用户信息响应给客户端
    res.send({
      status: 0,
      message: '获取用户基本信息成功！',
      data: results[0],
    })
  })
}

exports.updateReshui = (req, res) => {
    db.query(sql2, (err, results) => {
      // 1. 执行 SQL 语句失败
      if (err) return res.cc(err)
  
      // 3. 将用户信息响应给客户端
      return res.cc('修改用户基本信息成功！', 0)
    })
  }