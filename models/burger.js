console.log("burger.js");
/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
    selectAll: function (cb) {
        orm.selectAllFrom('burgers', function (res) {
            cb(res);
        });
    },
    // cols and vals are arrays
    create: function (cols, vals, cb) {
        orm.createInsertInto('burgers', cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateSetWhere('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;