const express = require('express')
const userCtrl = require('../controller/user')

const router = express.Router()


router.post('/users/login', userCtrl.login)

router.post('/users',userCtrl.register)
 
// 更新当前用户
router.get('/user',)

module.exports = router