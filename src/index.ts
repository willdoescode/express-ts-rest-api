import * as express from 'express';
import * as cors from 'cors';
import {todoRouter} from './todo';
import * as compression from 'compression';
import * as morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
for (const m of [
  cors({origin: '*'}),
  todoRouter,
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
