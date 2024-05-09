import { Schema, Types } from 'mongoose';
import { Section, GradeLevel } from './studentSchema';

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
    _id?: Types.ObjectId,
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

export interface IClass {
    _id?: Types.ObjectId,
    section: Section,
    gradeLevel: GradeLevel,
    refTeacherId: string, //teacher id
    refStudentIds: string[], //array of student id's
    room: string // any room number ig no limits
}

export const classSchema = new Schema<IClass>({
    section: { type: String, required: true, default: Section.imus },
    refTeacherId: { type: String, required: true },
    refStudentIds: { type: [String], required: true, default: []},
    room: { type: String, required: true }
});

export interface IGrade {
    _id?: Types.ObjectId,
    subject: Field,
    assignment_1: number,
    assignment_2: number,
    written_task: number,
    performance_task: number,
    final_exam: number,
    // computed grade = (assignment_1*weight + assignment_2*weight + written_task*weight + performance_task*weight + final_exam*weight) / 5
    refStudentId: string, //student id 
}

export const gradeSchema = new Schema<IGrade>({
    subject: { type: String, required: true, default: Field.science },
    assignment_1: { type: Number, required: true },
    assignment_2: { type: Number, required: true },
    written_task: { type: Number, required: true },
    performance_task: { type: Number, required: true },
    final_exam: { type: Number, required: true },
    refStudentId: { type: String, required: true }
});