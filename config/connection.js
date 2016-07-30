//console.log("connections.js");

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "",
        database: "burgers_db"
    },
    jawsDB: {
        host: "nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        username: "rxiw05zby67bvyb0",
        password: "rlj50db4hg3ch9uo",
        port: 3306,
        database: "fuvq8cyzfx0nmaxp"
        // TODO: Add your JawsDB connection info here
    }
}


// TODO: connect your jawsDB connection with the mysql connection.
var connection = mysql.createConnection(source.jawsDB);


// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Database connected as id ' + connection.threadId);
});

module.exports = connection;