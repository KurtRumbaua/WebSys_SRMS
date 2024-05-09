import { EnrollmentStatus, IEnrollment } from "./database/enrollmentSchema";
import { db } from './database/mongodbConfig';

export class EnrollmentModel {
    // get

    async getEnrollments(): Promise<IEnrollment[]> {
        return await db.EnrollmentModel.find();
    }

    async getEnrollment(enrollmentId: string): Promise<IEnrollment> {
        const enrollmentData = await db.EnrollmentModel.findOne({ _id: enrollmentId });
        if (!enrollmentData) {
            throw new Error(`getEnrollment: enrollment ${enrollmentId} not found`);
        }
        return enrollmentData;
    }

    // create
    async createEnrollment(enrollment: IEnrollment): Promise<IEnrollment> {
        const newEnrollment = new db.EnrollmentModel(enrollment);
        return await newEnrollment.save();
    }

    // update
    async updateEnrollment(enrollmentId: string, enrollment: IEnrollment): Promise<boolean> {
        try {
            const isSuccess = await db.EnrollmentModel.updateOne({ _id: enrollmentId }, enrollment);
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error updating enrollment: ${enrollmentId}-${enrollment}`, error);
            return false;
        }
    }

    async updateEnrollmentStatus(enrollmentId: string, status: EnrollmentStatus): Promise<boolean> {
        try {
            const isSuccess = await db.EnrollmentModel.updateOne({ _id: enrollmentId }, { enrollmentStatus: status });
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error updating enrollment status: ${enrollmentId}-${status}`, error);
            return false;
        }
    }

    // delete

    async deleteEnrollment(enrollmentId: string): Promise<boolean> {
        try {
            const isSuccess = await db.EnrollmentModel.deleteOne({ _id: enrollmentId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting enrollment: ${enrollmentId}.`, error);
            return false;
        }
    }

    async deleteAllEnrollments(): Promise<boolean> {
        try {
            const isSuccess = await db.EnrollmentModel.deleteMany({});
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting all enrollments.`, error);
            return false;
        }
    }

    async deleteEnrollmentByStudentId(studentId: string): Promise<boolean> {
        try {
            const isSuccess = await db.EnrollmentModel.deleteOne({ refStudentId: studentId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting enrollment by student id: ${studentId}.`, error);
            return false;
        }
    }

}
