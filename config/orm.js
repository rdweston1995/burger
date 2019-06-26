var connection = require("./connection.js");

var orm = {
    selectAll: function(table){
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, res){
            if(err) throw err;
            console.table(res);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
};

module.exports = orm;