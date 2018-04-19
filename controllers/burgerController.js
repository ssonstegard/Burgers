var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// add burgers 
router.post("/api/burgers", function (req, res) {
    console.log(req.body.devour)
    burger.create([
        "name", "devour"
    ],
        [req.body.name,req.body.devour],
        function (result) {
            // res.json({
            //     id: result.insertId
            // });
            res.redirect("/");
        });
});

// updates burger status
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    // return res.send();
    burger.update("burgers",{
        devour: req.body.devour
    },
        condition, function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
            // res.redirect("/");
        });
});



///// Rachels Code

// router.put("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);
// if (req.body.devour ==1){
//     req.body.devour = 0
// }
// else{
//     req.body.devour = 1
// };
//     burger.updateOne("burgers",
//         req.body.devour,
//         req.params.id, function (result) {
//             if (result.changedRows == 0) {
//                 return res.status(404).end();
//             }
//             else {
//                 res.status(200).end();
//             }
//         });
// });



// Export routes for server.js to use.
module.exports = router;


// exports for server.js
module.exports = router;
