import * as mongoose from 'mongoose';
export declare const Todo: mongoose.Model<mongoose.Document<any>>;
export interface TodoI {
    title: string;
    description: string;
}
