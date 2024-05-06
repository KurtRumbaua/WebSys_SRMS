import { Schema, Types } from 'mongoose';

export enum EnrollmentStatus {
    ENROLLED = 'ENROLLED',
    DROPPED = 'DROPPED',
    PENDING = 'PENDING',
    GRADUATED = 'GRADUATED',
    NONE = 'NONE'
}

export interface IEnrollment {
    _id: Types.ObjectId;
    studentId: string,
    yearLevel: Number,
    enrollmentDate: Date,
    enrollmentStatus: EnrollmentStatus
}

export const enrollmentSchema = new Schema<IEnrollment>({
    studentId: { type: String, required: true },
    yearLevel: { type: Number, required: true },
    enrollmentDate: { type: Date, required: true },
    enrollmentStatus: { type: String, required: true }
});