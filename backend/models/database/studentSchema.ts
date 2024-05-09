import { Schema, Types } from 'mongoose';
import { EnrollmentStatus } from './enrollmentSchema';

export enum GradeLevel {
    first_grade = '1',
    second_grade = '2',
    third_grade = '3',
    fourth_grade = '4',
    fifth_grade = '5',
    sixth_grade = '6',
}

export enum Section {
    imus = "IMUS",
    dasma = "DASMA",
    bacoor = "BACOOR",
    maragondon = "MARAGONDON",
    general_trias = "GENERAL TRIAS",
}

export interface IStudent {
    _id?: Types.ObjectId,
    parentId: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    gradeLevel: GradeLevel,
    section: Section,
    email: string,
    contactNumber: string,
    studentNumber: string, // use generateStudentId() from utilities/utils.ts
    birthDate: Date,
    address: string,
    medicalCondition: string,
    allergy: string,
    emergencyContact: string,
    enrollmentStatus: EnrollmentStatus
}

export const studentSchema = new Schema<IStudent>({
    parentId: { type: String, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    gradeLevel: { type: String, required: true, default: GradeLevel.first_grade },
    section: { type: String, required: true, default: Section.imus },
    email: { type: String, required: true, unique: true},
    contactNumber: { type: String, required: true, unique: true},
    studentNumber: { type: String, required: true, unique: true },
    birthDate: { type: Date, required: true },
    address: { type: String, required: true },
    medicalCondition: { type: String, default: 'none'},
    allergy: { type: String, default: 'none'},
    emergencyContact: { type: String, required: true },
    enrollmentStatus: { type: String, required: true, default: EnrollmentStatus.NONE}
});