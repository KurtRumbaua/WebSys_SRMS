import { Schema, Types } from 'mongoose';
import { Field } from './teacherSchema';

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