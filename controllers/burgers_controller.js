var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObj ={
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/", function(req, res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect("/");
    })
});

router.put("/:id", function(req, res){
    //var dev = "id = " + req.params.id;
    var id = req.params.id;
    //console.log("devoured: ", dev);
    console.log(id);
    console.log(req.params.id);
    burger.updateOne(req.params.id, function(){
        res.redirect('/');
    })
});

module.exports = router;