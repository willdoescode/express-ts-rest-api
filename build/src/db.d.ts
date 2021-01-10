import { TodoI } from './models';
export default class DB {
    constructor();
    addTodo({ title, description }: TodoI): Promise<void>;
}
