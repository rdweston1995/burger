var orm = require("./../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(result){
            cb(result);
        });
    },
    insertOne: function(cols, val, cb){
        orm.insertOne('burgers', cols, val, function(result){
            cb(result);
        });
    },
    updateOne: function(devoured, id, cb){
        orm.updateOne('burgers', devoured, id, function(result){
            cb(result);
        });
    },
    delete: function(condition, cb){
        orm.delete('burgers', devoured, id, cb, function(result){
            cb(result);
        });
    }
}

module.exports = burger;