const express = require('express');
const userCtrl = require('../controller/user');
const { query, validationResult, body } = require('express-validator');

const router = express.Router();

router.post('/users/login', userCtrl.login);

router.post(
  '/users/register',
  [
    // 1.配置验证规则
    body('user.username').notEmpty(),
    body('user.password').notEmpty(),
    body('user.email').notEmpty(),
  ],
  (req, res, next) => {
    // 2.判断验证结果
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userCtrl.register
); // 3.通过验证，执行具体的控制器处理

// 更新当前用户
router.get('/user');

module.exports = router;
