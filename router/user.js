const express = require('express');
const userCtrl = require('../controller/user');
const { query, validationResult, body } = require('express-validator');
const { User } = require('../model/user');

const router = express.Router();

router.post('/users/login', userCtrl.login);

router.post(
  '/users/register',
  [
    // 1.配置验证规则
    body('user.username')
      .notEmpty()
      .withMessage('用户名不能为空')
      .custom(async (username) => {
        const user = await User.findOne({ username });
        if (user) {
          return Promise.reject('用户名已存在');
        }
      }),
    ,
    body('user.password').notEmpty().withMessage('密码不能为空'),
    body('user.email')
      .notEmpty()
      .withMessage('邮箱不能为空')
      .isEmail()
      .withMessage('邮箱格式不正确')
      .bail()
      .custom(async (email) => {
        const user = await User.findOne({ email });
        if (user) {
          return Promise.reject('邮箱已存在');
        }
      }),
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
