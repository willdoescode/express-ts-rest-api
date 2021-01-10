import * as express from 'express';
import DB from './db';
import {TodoI, Todo} from './models';

const db = new DB();

const router = express.Router();

router.get('/api/todo', (req, res) => {

});

router.post('/api/todo', (req, res) => {
  db.addTodo(req.body as TodoI)
    .then(() => console.log(`Added ${req.body} to db`))
    .catch(error => console.log(error));
  res.send();
});

export {router as todoRouter};
