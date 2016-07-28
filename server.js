var express = require('express');
var app = express();
app.set("port", process.env.PORT || 3000);

var methodOverride = require('method-override')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

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


var routes = require('./controllers/burger_controller.js');
console.log("routes = "+routes)
app.use('/', routes);


app.listen(app.get('port'),function(){
    console.log('Experss started on http://localhost:' + app.get('port') +" press cntrl-C to exit");
});