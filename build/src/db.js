"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const models_1 = require("./models");
class DB {
    constructor() {
        mongoose
            .connect('mongodb://localhost/tododb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
        })
            .then(() => {
            console.log('Connected to db');
        })
            .catch(e => {
            console.log(`Error connecting to db: ${e}`);
        });
    }
    async addTodo({ title, description }) {
        await new models_1.Todo({
            title,
            description,
        }).save();
    }
}
exports.default = DB;
//# sourceMappingURL=db.js.map