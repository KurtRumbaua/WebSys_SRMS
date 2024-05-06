import { Schema, Types } from 'mongoose';

export interface IClass {
    _id: Types.ObjectId;
    name: string;
    teacher: string;
    students: string[];
}

export const classSchema = new Schema<IClass>({
    name: { type: String, required: true , unique: true},
    teacher: { type: String, required: true },
    students: { type: [String], default: [] }
});