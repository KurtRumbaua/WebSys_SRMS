import { Schema, Types } from 'mongoose';

export enum Role {
    ADMIN = 'ADMIN',
    TEACHER = 'TEACHER',
    PARENT = 'PARENT',
    NONE = 'NONE'
}

export interface IUser {
    _id?: Types.ObjectId,
    email: string,
    password: string,
    role: Role
}

export const userSchema = new Schema<IUser>({
    email: { type: String, required: true , unique: true},
    password: { type: String, required: true },
    role: { type: String, required: true, default: Role.NONE }
});
