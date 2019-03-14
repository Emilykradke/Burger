var orm = require("../config/orm.js");

var todo = {
    all: function(cb) {
        orm.all("todos", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create("todos", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("todos", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (todos_controller.js)
module.exports = todo