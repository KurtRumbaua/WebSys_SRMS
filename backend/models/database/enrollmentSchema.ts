import { Schema, Types } from 'mongoose';
import { GradeLevel } from './studentSchema';

export enum EnrollmentStatus {
    ENROLLED = 'ENROLLED',
    DROPPED = 'DROPPED',
    PENDING = 'PENDING',
    GRADUATED = 'GRADUATED',
    REJECTED = 'REJECTED',
    NONE = 'NONE'
}

export interface IEnrollment {
    _id?: Types.ObjectId;
    studentId: string,
    gradeLevel: GradeLevel,
    enrollmentDate: Date,
    enrollmentStatus: EnrollmentStatus,
    form137?: string,
    GMC?: string,
    birthCertificate?: string,
    paymentProof?: string
}

export const enrollmentSchema = new Schema<IEnrollment>({
    studentId: { type: String, required: true },
    gradeLevel: { type: String, required: true, default: GradeLevel.first_grade },
    enrollmentDate: { type: Date, required: true },
    enrollmentStatus: { type: String, required: true, default: EnrollmentStatus.PENDING },
    form137: { type: String , default: null},
    GMC: { type: String , default: null},
    birthCertificate: { type: String , default: null},
    paymentProof: { type: String , default: null}
});