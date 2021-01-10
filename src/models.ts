import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const Todo = mongoose.model(
  'Todo',
  new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
);

export interface TodoI {
  title: string;
  description: string;
}
