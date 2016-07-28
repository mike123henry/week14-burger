console.log("burger_controller.js")
/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    //console.log("req = "+req);
    res.redirect('/burger');
});

router.get('/burger', function (req, res) {
    burger.all(function (data) {
        var hbsObject = { burger: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});



module.exports = router;