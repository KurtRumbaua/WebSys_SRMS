import { Schema, Types } from 'mongoose';

// user -> parent -> student -> grade
export interface IParent {
    _id?: Types.ObjectId,
    firstName: string,
    middleName?: string,
    lastName: string,
    contactNumber: string,
    email: string,
    address: string,
    userId: string
}

export const parentSchema = new Schema<IParent>({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    contactNumber: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    address: { type: String, required: true },
    userId: { type: String, required: true }
});