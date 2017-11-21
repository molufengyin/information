/**
 * Created by Administrator on 2017/9/30.
 */
const express = require('express');
const router = express.Router();
const UserModel = require('../models/students');

router.get('/delete/:id',function(req,res){
    console.log(req.params);
    var id = req.params.id;
    UserModel.findByIdAndRemove(id,function(err){
        if(err){
            return;
        }
        res.redirect('/');
    })
});

module.exports = router;