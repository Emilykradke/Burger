var express = require("express");

var router = express.Router();

// Import the model (todo.js) to use its database functions
var todo = require("../models/todo.js");

// Create all of the routes and set up the logic within routes where required.
router.get("/", function(req, res) {
    todo.all(function(data) {
        var hbsObject = {
            todos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/todos", function(req, res) {
    todo.create(["todo", "done"], [req.body.todo, req.body.done], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/todos/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    todo.update(
        {
            done: req.body.done
        }, 
        condition, 
        function(result) {
            if (result.changedRows === 0) {
                // if no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router