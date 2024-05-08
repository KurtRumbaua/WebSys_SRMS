import { Schema, Types } from 'mongoose';
import { Field } from './teacherSchema';
import { GradeLevel, Section } from './studentSchema';

export interface IClass {
    _id: Types.ObjectId,
    subject: Field,
    section: Section,
    gradeLevel: GradeLevel,
    refTeacherId: string, //teacher id
    refStudentIds: string[], //array of student id's
    room: string // any room number ig no limits
}

export const classSchema = new Schema<IClass>({
    subject: { type: String, required: true, default: Field.science },
    section: { type: String, required: true, default: Section.imus },
    refTeacherId: { type: String, required: true },
    refStudentIds: { type: [String], required: true, default: []},
    room: { type: String, required: true }
});