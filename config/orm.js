//console.log("orm.js");
/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/
var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];

    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    selectAllFrom: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        //console.log("selectAll queryString = "+ queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertInto: function(tableInput, cols, vals, cb){
        var queryString = 'INSERT INTO ' + tableInput + ' '+
                           '( ' + cols.toString() + ' ) '+
                           'VALUES ( ' + printQuestionMarks(vals.length) + ');' ;
        //console.log("insertOne queryString = "+ queryString);
        //console.log("insertOne cols = "+ cols);
        //console.log("insertOne vals = "+ vals);
      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateSetWhere: function (table, objColVals, condition, cb) {
        //console.log("burger orm update");
        //console.log("    -- table = "+table );
        //console.log("    -- objColVals = "+objColVals);
        //console.log("    -- condition = "+condition);

        var queryString = 'UPDATE ' + table +
                          ' SET '   + objToSql(objColVals) +
                          ' WHERE ' + condition;

        //console.log('updateSetWhere = '+queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    createInsertInto: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;

        queryString = queryString + ' (';
        queryString = queryString + cols.toString();
        queryString = queryString + ') ';
        queryString = queryString + 'VALUES (';
        queryString = queryString + printQuestionMarks(vals.length);
        queryString = queryString + ') ';

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;