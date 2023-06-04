const express = require('express')

const router = express.Router()

// 用户登录
router.get('/:username',async (req, res, next) => {
  try {
    res.send('post /profiles/:username')
  } catch (err) {
    next(err)
  }
})

module.exports = router