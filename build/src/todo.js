"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express = require("express");
const db_1 = require("./db");
const db = new db_1.default();
const router = express.Router();
exports.todoRouter = router;
router.get('/api/todo', (req, res) => {
});
router.post('/api/todo', (req, res) => {
    db.addTodo(req.body)
        .then(() => console.log(`Added ${req.body} to db`))
        .catch(error => console.log(error));
    res.send();
});
//# sourceMappingURL=todo.js.map