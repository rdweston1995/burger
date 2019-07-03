var orm = require("./../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(result){
            cb(result);
        });
    },
    insertOne: function(burger, cb){
        orm.insertOne("burgers", burger, function(result){
            cb(result);
        })
    },
    updateOne: function(id, cb){
        orm.updateOne('burgers', id, function(result){
            cb(result);
        });
    },
}

module.exports = burger;