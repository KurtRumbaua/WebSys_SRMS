import mongoose from "mongoose";
import { IClass, classSchema } from "./classSchema";
import { IEntity, entitySchema, IUser, userSchema } from "./userSchema";
import { IEnrollment, enrollmentSchema } from "./enrollmentSchema";
import { IStudent, studentSchema } from "./studentSchema";

const connectionString: string = process.env.MONGODB_CONNECTION_STRING!;
const databaseName: string = 'school_db';

const initDatabaseConnection = async () => {
    try {
        await mongoose.connect(`${connectionString}/${databaseName}`, );
        console.log('[MongoDB] connection successful');
    } catch (error) {
        console.log('[MongoDB] connection failed:', error);
    }
}

const dropDatabase = async () => {
    try {
        await mongoose.connection.dropDatabase();
        console.log(`[MongoDB] dropped [${databaseName}] database`);
        return true;
    } catch (error) {
        console.log("[MongoDB] Drop database error: ", error);
        return false;
    }
}

const ClassModel = mongoose.model<IClass>('Class', classSchema);
const EntityModel = mongoose.model<IEntity>('Entity', entitySchema);
const UserModel = mongoose.model<IUser>('User', userSchema);
const EnrollmentModel = mongoose.model<IEnrollment>('Enrollment', enrollmentSchema);
const StudentModel = mongoose.model<IStudent>('Student', studentSchema);

export const db = {
    initDatabaseConnection,
    dropDatabase,
    ClassModel,
    EntityModel,
    UserModel,
    EnrollmentModel,
    StudentModel
}