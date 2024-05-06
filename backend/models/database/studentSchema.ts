import { Schema, Types } from 'mongoose';
import { EnrollmentStatus } from './enrollmentSchema';
export interface IStudent {
    _id: Types.ObjectId,
    parentId: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    birthDate: Date,
    address: string,
    enrollmentStatus: EnrollmentStatus
}

export const studentSchema = new Schema<IStudent>({
    parentId: { type: String, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    address: { type: String, required: true },
    enrollmentStatus: { type: String, required: true, default: EnrollmentStatus.NONE}
});