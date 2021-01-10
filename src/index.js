"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var todo_1 = require("./todo");
var compression = require("compression");
var morgan = require("morgan");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
for (var _i = 0, _a = [
    cors({ origin: '*' }),
    todo_1.todoRouter,
    compression(),
    morgan('dev'),
]; _i < _a.length; _i++) {
    var m = _a[_i];
    app.use(m);
}
var resObject = {
    hello: 'world'
};
app.get('/', function (req, res) { return res.send(JSON.stringify(resObject)); });
app.listen(3000, function () {
    console.log('Listening on port :3000');
});
