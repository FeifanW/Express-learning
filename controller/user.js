const { User } = require('../model');
// 用户登录
exports.login = async (req, res, next) => {
  try {
    res.send('post /users/login');
  } catch (err) {
    next(err);
  }
};

// 用户注册
exports.register = async (req, res, next) => {
  try {
    // 1.获取请求体数据
    console.log(req.body);

    // 2.数据验证
    // 3.验证通过，将数据保存到数据库
    const user = new User(req.body.user);

    // 保存到数据库
    await user.save();

    // 发送成功响应
    res.status(201).json({
      user,
    });
  } catch (err) {
    next(err);
  }
};
