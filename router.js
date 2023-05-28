// 路由模块
const express = require('express')

// 1.创建路由实例
const router = express.Router()

// 2.配置路由
router.get('/foo',(req,res) => {
  res.send('get /foo')
})

router.post('/foo',(req,res) => {
  res.send('post /foo')
})

// 3.导出路由实例
module.exports = router