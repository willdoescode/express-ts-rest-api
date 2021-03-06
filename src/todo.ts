import * as express from 'express';
import DB from './db';
import {TodoI} from './models';

const db = new DB();

const router = express.Router();

router.get('/api/todo', (req, res) => {
  db.getTodos().then(todos => {
    if (todos !== []) {
      res.status(200);
      res.send(JSON.stringify(todos));
    } else {
      res.status(404);
      res.send(JSON.stringify([]));
    }
  });
});

router.post('/api/todo', (req, res) => {
  db.addTodo(req.body as TodoI).then(id => {
    id.save((e, i) => {
      if (e) {
        console.warn(`Error adding ${req.body} to db: ${e}`);
        res.status(400);
        res.send(JSON.stringify('{}'));
        return;
      }
      res.status(200);
      res.send(JSON.stringify(i));
      console.log(`Added ${(req.body as TodoI).title} to db`);
    });
  });
});

router.post('/api/todo/delete', (req, res) => {
  if (req.body.id) {
    db.deleteTodo(req.body.id)
      .then(() => {
        console.log(`Deleted Todo`);
        res.status(200);
      })
      .catch(e => {
        console.log(e);
        res.status(204);
        return;
      });
  } else {
    res.status(204);
    return;
  }
});

export {router as todoRouter};
