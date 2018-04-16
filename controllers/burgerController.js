var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// add burgers 
router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "devour"
    ],
        [req.body.name, req.body.devour],
        function (result) {
            res.json({
                id: result.insertId
            });
        });
});

// updates burger status
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devour: req.body.devour
    },
        condition, function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
});

// exports for server.js
module.exports = router;
