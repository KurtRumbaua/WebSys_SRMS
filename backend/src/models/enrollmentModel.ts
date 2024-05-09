import { EnrollmentStatus, IStudent } from "./database/studentSchema";
import { db } from './database/mongodbConfig';

export class EnrollmentModel {
    // get
    async getNotEnrolled(): Promise<IStudent[]> {
        return await db.StudentModel.find({ $ne: EnrollmentStatus.ENROLLED }, { studentNumber: 1, firstName: 1, lastName: 1, gradeLevel: 1, section: 1, enrollmentStatus: 1, }).sort('lastName'); //leaN? -_id for desc.
    }

    async getPendingEnrollments(): Promise<IStudent[]> {
        return await db.StudentModel.find({enrollmentStatus: EnrollmentStatus.PENDING}, { studentNumber: 1, firstName: 1, lastName: 1, gradeLevel: 1, section: 1, enrollmentStatus: 1 }).sort('lastName'); //leaN? -_id for desc.
    }

    async getEnrolledStudents(): Promise<IStudent[]> {
        return await db.StudentModel.find({enrollmentStatus: !EnrollmentStatus.ENROLLED}, { studentNumber: 1, firstName: 1, lastName: 1, gradeLevel: 1, section: 1, enrollmentStatus: 1 }).sort('lastName'); //leaN? -_id for desc.
    }

    async getAllEnrollments(): Promise<IStudent[]> {
        return await db.StudentModel.find();
    }

    async getEnrolledInfo(studentNumber: string): Promise<IStudent> {
        const studentData = await db.StudentModel.findOne({ studentNumber: studentNumber });
        if (!studentData) {
            throw new Error(`getStudent: student ${studentNumber} not found`);
        }
        return studentData;
    }

}
