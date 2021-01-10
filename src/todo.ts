import * as express from 'express';
import DB from './db';
import {TodoI} from './models';

const db = new DB();

const router = express.Router();

router.get('/api/todo', (req, res) => {});

router.post('/api/todo', (req, res) => {
  db.addTodo(req.body as TodoI)
    .then(id => {
      id.save((e, i) => {
        res.send(JSON.stringify(i));
        console.log(`Added ${(req.body as TodoI).title} to db`);
      });
    })
    .catch(error => console.warn(`Error adding ${req.body} to db: ${error}`));
});

export {router as todoRouter};
