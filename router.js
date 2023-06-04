// 路由模块
const express = require('express')

// 1.创建路由实例
const router = express.Router()

// 2.配置路由
router.post('/users/login',async(req, res, next) => {
  try {
    // 处理请求
    res.send('post /users/login')
  } catch (err) {
    next(err)
  }
})

router.get('/users',async(req, res, next) => {
  try {
    // 处理请求
    res.send('post /users')
  } catch (err) {
    next(err)
  }
})

// 更新当前用户
router.get('/user',async (req,res,next) => {
  try {
    res.send('get /user')
  } catch(err) {
    next(err)
  }
})

// 3.导出路由实例
module.exports = router