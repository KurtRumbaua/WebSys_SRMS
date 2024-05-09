import { Schema, Types } from 'mongoose';
import { GradeLevel } from './studentSchema';

export interface IAnnouncement {
    _id?: Types.ObjectId;
    refClassId: string,
    datePosted: Date,
    title: string,
    content: string,
}

export const announcementSchema = new Schema<IAnnouncement>({
    refClassId: { type: String, required: true },
    datePosted: { type: Date, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
});