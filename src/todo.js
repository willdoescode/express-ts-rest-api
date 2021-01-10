"use strict";
exports.__esModule = true;
exports.todoRouter = void 0;
var express = require("express");
var db_1 = require("./db");
var db = new db_1["default"]();
var router = express.Router();
exports.todoRouter = router;
router.get('/api/todo', function (req, res) { });
router.post('/api/todo', function (req, res) {
    db.addTodo(req.body)
        .then(function (id) {
        id.save(function (e, i) {
            res.send(JSON.stringify(i));
            console.log("Added " + req.body.title + " to db");
        });
    })["catch"](function (error) { return console.warn("Error adding " + req.body + " to db: " + error); });
});