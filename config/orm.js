var connection = require("./connection.js");

function printQuestionMarks(num){
    var array = [];

    for(var i = 0; i < num; i++){
        array.push("?");
    }
    return array.toString();
}

var orm = {
    selectAll: function(table, cb){
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, res){
            if(err) throw err;
            console.table(res);
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb){
        var query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";
        connection.query(query, vals, function(err, res){
            console.log(query);

            if(err) throw err;
            cb(res);
        })
    },
    updateOne: function(table, devoured, id, cb){
        var query = 'UPDATE ?? SET ?? = ? WHERE id = ?';
        connection.query(query, [table, devoured, id], function(err, res){
            if(err) throw err;
            cb(res);
        });
    },

    delete: function(table, devoured, cb){
        var query = "DELETE FROM " + table;
        query += " WHERE ";
        query += devoured;

        connection.query(query, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;