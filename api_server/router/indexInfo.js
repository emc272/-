const express = require('express')
const router = express.Router()

// 导入用户信息的处理函数模块
const indexInfo_handler = require('../router_handler/indexInfo')

// 获取用户的基本信息
router.get('/indexinfo', indexInfo_handler.getIndexInfo)

// 更新用户的基本信息
router.post('/addindexinfo', indexInfo_handler.updateTopIndexInfo)

module.exports = router