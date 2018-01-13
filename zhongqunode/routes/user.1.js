var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


var address = "mongodb://localhost:27017/reactProject";

router.post('/reg', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  // console.log(req.body)
  // console.log(req.session.username)
  MongoClient.connect(address, function (err, db) {
    if (!err) {
      var user = db.collection("user")
      user.find({}).toArray(function (err, docs) {
        // console.log(docs) 注册传过来的所有数据
        var temp = true;
        //遍历数据
        docs.forEach((item, index) => {
          if (item.username == req.body.username) {
            temp = false;
          }
        })
        //如果temp为true 则代表user表中不存在该用户
        if (temp) {
          user.save(req.body)
          res.send({ error: 0, msg: '注册成功' })
        } else {
          //否则，用户已经注册了
          res.send({ error: 1, msg: '用户名已注册' })
        }
      });
    }
  })
})

router.post('/login', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  MongoClient.connect(address, function (err, db) {
    if (!err) {
      var user = db.collection("user")
      user.find({}).toArray(function (err, docs) {

        docs.forEach((item, index) => {
          //如果用户名和密码存在则代表用户注册过了
          if (item.username == req.body.username && item.password == req.body.password) {
            // req.session.username = item._id
            // console.log(req.session.username)
            res.send({ error: 0, msg: '登录成功' })
          }
          // else if(item.username != req.body.username&&item.password == req.body.password){
          //   res.send({ error: 1, msg: '用户名错误' });
          // }else if(item.password != req.body.password&&item.username == req.body.username){
          //   res.send({ error: 2, msg: '密码错误' }); 
          // }

        });
        res.send({ error: 1, msg: '用户名或密码错误' })
      });
    }
  })
})

// ----------------------------------------------------------

//购物车接口  mysql  汪力
app.use('/addshopcart', (req, res) => {
  //筛选 shopcart库里面user表里面uid=传过来的uid信息
  sql2 = `SELECT SHOPCART FROM user where uid=${req.body.uid}`
  db.query(sql2, (err, data) => {
    if (err) {
      res.send('服务器错误！')
    } else {
      //如果信息不存在
      if (!data[0].SHOPCART) {
        //数量=1
        var num = 1;
        var obj = {}
        //存一个 键cartid 值为 传过来的num
        obj[req.body.cartid] = num;
        //将一个对象解析出字符串
        JSON.stringify(obj)
      } else {//如果数据存在
        //parse 用于从一个字符串中解析出json对象
        var obj = JSON.parse(data[0].SHOPCART)
        //如果表里面不存在数量 则数量为1 否则数量+1
        if (!obj[req.body.cartid]) {
          obj[req.body.cartid] = 1;
        } else {
          obj[req.body.cartid] = obj[req.body.cartid] + 1;
        }
      }
      //更新数据当前端进行加减时 num 条件为 传过来的这个id
      sql3 = `UPDATE USER SET SHOPCART='${JSON.stringify(obj)}' where uid=${req.body.uid}`
      db.query(sql3, (err, data) => {
        if (err) {
          console.log('插入失败！')
        } else {
          console.log('插入成功！')
          res.send(data) 
        }
      })
    }
  })
})


module.exports = router; 