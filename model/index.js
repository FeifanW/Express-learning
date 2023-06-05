const mongoose = require('mongoose');
const { dbUri } = require('../config/config.default');

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
// 连接失败的时候
db.on('error', (err) => {
  console.log(console, 'MongoDB连接失败', err);
});
// 连接成功
db.once('open', function () {
  // we're connected!
  console.log('MongoDB连接成功');
});

// 创建了一个模型
const Cat = mongoose.model('Cat', { name: String });

// 组织导出模型类
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article')),
};

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
