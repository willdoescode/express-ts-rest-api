import * as mongoose from 'mongoose';
import {Todo, TodoI} from './models';

export default class DB {
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

  public async addTodo({title, description}: TodoI) {
    await new Todo({
      title,
      description,
    }).save();
  }
}
