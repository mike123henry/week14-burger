var express = require('express');
var app = express();

var methodOverride = require('method-override')
var bodyParser = require('body-parser');

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'day_planner_db'
});
