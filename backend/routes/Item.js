const express = require("express");

const router = express.Router();

const item = ["hello world"]


router.get("/list",function(req,res){
    res.send(item)
})

module.exports=router