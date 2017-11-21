/**
 * Created by Administrator on 2017/9/30.
 */
const express = require('express');
const router = express.Router();
const UserModel = require('../models/students');
//实现更新页面跳转
router.get('/edit/:id',function(req,res){
    //获取动态路由路径上的参数信息
    var id = req.params.id;
    UserModel.findById(id).exec(function(err,data){
        if(err){
            return;
        }
        console.log(data);
        res.render('edit',{
            title:'内容更新页面',
            data:data
        })
    })
});

//数据更新处理
router.post('/edit/:id',function(req,res){
    var id = req.params.id;
    UserModel.findByIdAndUpdate(id,req.body).exec(function(err){
        if(err){
            return;
        }
        res.json({error:0,message:'数据更新成功'});
    })
});
module.exports = router;