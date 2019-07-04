var connection = require("./connection.js");

var orm = {
    //WORKING
    selectAll: function(table, cb){
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, res){
            if(err) throw err;
            console.table(res);
            cb(res);
        });
    },
    //NOT WORKING
    insertOne: function(table, burger, cb){
        // var query = "INSERT INTO " + table;
        var query = 'INSERT INTO ' + table + "(burger_name) VALUES (?)";

        connection.query(query, [burger], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    //IDK
    updateOne: function(table, id, cb){
        
        var query = 'UPDATE ' + table + ' SET devoured="true" WHERE id=' + id;
        console.log(query);
        connection.query(query, function(err, res){
            if(err) throw err;
            console.log(id + ": has been devoured");
            cb(res);
        });
    },
};

module.exports = orm;