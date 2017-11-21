var express = require('express');
var router = express.Router();
const UserModel = require('../models/students');

/* GET home page. */
router.get('/', function(req, res, next) {
  UserModel.find().count(function(err,count){
    if(err){
      return res.json({error:0,message:'查找失败'});
    }
    console.log(count);
    UserModel.find().exec(function(err,data){
      if(err){
        return res.json({error:0,message:'查找失败'});
      }
        res.render('index', {
            title: '首页',
            data:data,
            count:count

        });
    })
  })

});













module.exports = router;
