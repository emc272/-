const express = require('express')
const router = express.Router()

// 导入用户信息的处理函数模块
const userInfo_handler = require('../router_handler/userInfo')

// 获取用户的基本信息
router.get('/userinfo', userInfo_handler.getUserInfo)

// 获取用户的基本信息
router.post('/updateReshui', userInfo_handler.updateReshui)

module.exports = router