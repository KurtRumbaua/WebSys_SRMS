import mongoose from "mongoose";
import { IClass, classSchema } from "./teacherSchema";
import { IUser, userSchema } from "./userSchema";
import { IStudent, studentSchema } from "./studentSchema";
import { ITransaction, transactionSchema } from "./transactionSchema";
import { IAnnouncement, announcementSchema } from "./announcementSchema";
import { IGrade, gradeSchema } from "./teacherSchema";
import { IParent, parentSchema } from "./parentSchema";
import { ITeacher, teacherSchema } from "./teacherSchema";

const connectionString: string = process.env.MONGODB_CONNECTION_STRING!;
const initDatabaseConnection = async () => {
    try {
        await mongoose.connect(`${connectionString}`);
        console.log('[MongoDB] connection successful');
    } catch (error) {
        console.log('[MongoDB] connection failed:', error);
    }
}

const dropDatabase = async () => {
    try {
        await mongoose.connection.dropDatabase();
        console.log(`[MongoDB] dropped database`);
        return true;
    } catch (error) {
        console.log("[MongoDB] Drop database error: ", error);
        return false;
    }
}

const ClassModel = mongoose.model<IClass>('Class', classSchema);
const UserModel = mongoose.model<IUser>('User', userSchema);
const StudentModel = mongoose.model<IStudent>('Student', studentSchema);
const TransactionModel = mongoose.model<ITransaction>('Transaction', transactionSchema);
const AnnouncementModel = mongoose.model<IAnnouncement>('Announcement', announcementSchema);
const GradeModel = mongoose.model<IGrade>('Grade', gradeSchema);
const ParentModel = mongoose.model<IParent>('Parent', parentSchema);
const TeacherModel = mongoose.model<ITeacher>('Teacher', teacherSchema);

export const db = {
    initDatabaseConnection,
    dropDatabase,
    ClassModel,
    UserModel,
    StudentModel,
    TransactionModel,
    AnnouncementModel,
    GradeModel,
    ParentModel,
    TeacherModel
}