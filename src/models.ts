import * as mongoose from 'mongoose';

export const Todo = mongoose.model(
  'Todo',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  })
);

export interface TodoI {
  title: string;
  description: string;
}
