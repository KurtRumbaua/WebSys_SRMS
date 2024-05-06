import { Schema, Types } from 'mongoose';

export enum Role {
    ADMIN = 'ADMIN',
    TEACHER = 'TEACHER',
    STUDENT = 'STUDENT',
    PARENT = 'PARENT',
    NONE = 'NONE'
}

export interface IEntity {
    _id: Types.ObjectId,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    role: Role
}

export const entitySchema = new Schema<IEntity>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, default: Role.NONE }
});

export interface IUser {
    _id: Types.ObjectId,
    entityId: string,
    username: string,
    password: string
}

export const userSchema = new Schema<IUser>({
    entityId: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});