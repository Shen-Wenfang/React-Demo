var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var address = "mongodb://localhost:27017/reactProject";

router.get('/', function (req, res, next) {
  console.log(req)
});



router.post('/reg', function (req, res, next) {
  console.log(req.body)
  // console.log(req.session.nikeName)
  MongoClient.connect(address, function (err, db) {
    if (!err) {
      if (req.body.nickname == "" || req.body.username == "" || req.body.password == "") {
        res.send({ error: 2, msg: '信息不能为空' })
      } else {
        var user = db.collection("user")
        user.find({}).toArray(function (err, docs) {
          var temp = true;
          docs.forEach((item, index) => {
            if (item.username == req.body.username) {
              temp = false;
            }
          })
          if (temp) {
            user.save(req.body)
            res.send({ error: 0, msg: '注册成功' })
          } else {
            res.send({ error: 1, msg: '用户名已注册' })
          }
        });
      }

    }
  })
})


router.post('/login', function (req, res, next) {
  console.log(req.body)
  MongoClient.connect(address, function (err, db) {
    let bStop = true;
    if (!err) {
      if (req.body.username == "" || req.body.password == "") {
        res.send({ error: 2, msg: '用户名不存在,赶快去注册吧！' })
      }else{
        var user = db.collection("user")
        user.find({}).toArray(function (err, docs) {
          docs.forEach((item, index) => {
            if (item.username == req.body.username && item.password == req.body.password) {
              // req.session.nikeName=item._id
              res.send({ error: 0, msg: '登录成功' });
              bStop = false;
            }
          })
          if (bStop) {
            res.send({ error: 1, msg: '用户名或密码错误' })
          }
        });
      }
      
    }
  })
})


module.exports = router; 