var express = require('express');
var router = express.Router();
router.get('/', function(req, res,next) {
  res.send('我是后台首页')
});

module.exports = router;


//后台请求数据的顺序
// router.get('/',function(req, res, next){
  // console.log(req)
  // console.log('users',req.session);
  // if(!req.session.username) res.send({error:1,msg:'未登录'});
  // else res.send({error:0,name:'库数据'});
  // mysql||mongoDb  兜一圈||https.request('代理数据')
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // res.send(data);//给你数据
// });

