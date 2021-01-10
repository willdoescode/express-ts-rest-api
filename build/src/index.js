"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const todo_1 = require("./todo");
const compression = require("compression");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
for (const m of [
    cors({ origin: '*' }),
    todo_1.todoRouter,
    compression(),
    morgan('dev'),
]) {
    app.use(m);
}
const resObject = {
    hello: 'world',
};
app.get('/', (req, res) => res.send(JSON.stringify(resObject)));
app.listen(3000, () => {
    console.log('Listening on port :3000');
});
//# sourceMappingURL=index.js.map