console.log("connections.js");

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
        Host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        Username: 'vo7g2cg25tu0lk5j',
        Password: 'd0hk2hgna2q7p6rp',
        Port: 3306,
        database: 'q0orx3zic7scjy0p'
        // TODO: Add your JawsDB connection info here
    }
}


// TODO: connect your jawsDB connection with the mysql connection.
var connection = mysql.createConnection(source.localhost);


// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Database connected as id ' + connection.threadId);
});

module.exports = connection;