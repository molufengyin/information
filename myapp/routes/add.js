/**
 * Created by Administrator on 2017/9/30.
 */
const express = require('express');
const UserModel = require('../models/students');
const router = express.Router();

router.get('/add',function(req,res){
    res.render('add',{
        title:'添加学生信息'
    })
});

router.post('/add',function(req,res){
    // console.log(132);
    console.log(req.body);
    var students = new UserModel(req.body);
    var name = req.body.name;
    UserModel.findOne({name:name}).exec(function(err,data){
        if(err){
            return res.json({error:1,message:'查找失败'});
        }
        if(data){
            return res.json({error:1,message:'该学生信息已存在'});
        }
        students.save(function(err){
            if(err){
                return res.json({error:1,message:'添加失败'});
            }
            res.json({error:0,message:'添加成功'});
        })
    })
});










module.exports = router;
