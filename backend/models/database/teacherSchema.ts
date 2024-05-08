import { Schema, Types } from 'mongoose';

export enum Field {
    science = 'SCIENCE',
    math = 'MATH',
    english = 'ENGLISH',
    filipino = 'FILIPINO',
    history = 'HISTORY',
    physical_education = 'PE',
    music = 'MUSIC',
    arts = 'ARTS',
    health = 'HEALTH',
    values = 'VALUES'
}

export interface ITeacher {
    _id: Types.ObjectId,
    firstName: string,
    middleName?: string,
    lastName: string,
    field: Field,
    classes: string[], // array id's of classes
    contactNumber: string,
    email: string,
    birthDate: Date,
    address: string,
    userId: string
}

export const teacherSchema = new Schema<ITeacher>({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    field: { type: String, required: true, default: Field.science },
    classes: { type: [String], required: true },
    contactNumber: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    birthDate: { type: Date, required: true },
    address: { type: String, required: true },
    userId: { type: String, required: true }
});