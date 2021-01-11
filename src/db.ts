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
    return new Todo({
      title,
      description,
      date: Date.now(),
    });
  }

  public async getTodos(){
    const todos = [];
    const cursor = await Todo.find({}).cursor();
    for (
      let item = await cursor.next();
      item !== null;
      item = await cursor.next()
    ) {
      todos.push(item);
    }
    return todos;
  }
  public async deleteTodo(id: string) {
    await Todo.deleteOne({_id: id});
  }
}
