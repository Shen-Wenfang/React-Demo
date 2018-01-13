var express = require('express');
var router = express.Router();

var mongoCt = require('mongodb').MongoClient;


router.get('/', function (req, res, next) {
  // console.log(req.query);
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  var address = 'mongodb://127.0.0.1:27017/reactProject';
  mongoCt.connect(address, function (err, db) {
    if (err) {
      console.log('databse error womenlist')
    } else {
      var womenlist = db.collection('womenlist');
      womenlist.find({}).toArray(function (err, result) {
        res.send(result);//返回给前端
        db.close();
      });
    }
  })
});

module.exports = router;
