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

router.post("/api/burgers", function(req, res){
    burger.insertOne([
        'burger_name', 'devoured'   
    ],[
        req.body.name, req.body.devoured
    ], function(result){
        res.json({id: result.insertId})
    })
});

router.post("/api/burgers/:id", function(req, res){
    var dev = "id = " + req.params.id;

    console.log("devoured: ", dev);

    burger.updateOne({
        devoured: req.body.devoured
    }, dev, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

router.delete("api/burgers/:id", function(req, res){
    var del = "id = " + req.params.id;

    burger.delete(del, function(res){
        if(res.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})

module.exports = router;