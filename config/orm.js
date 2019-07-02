var connection = require("./connection.js");

function printQuestionMarks(num){
    var array = [];

    for(var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table){
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, res){
            if(err) throw err;
            console.table(res);
        });
    },
    insertOne: function(){
        var query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        connection.query(query, vals, function(err, res){
            if(err) throw err;
            
        })
    },
    updateOne: function(){

    }
};

module.exports = orm;