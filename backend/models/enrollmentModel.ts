import { IEnrollment } from "./database/enrollmentSchema";
import { db } from './database/mongodbConfig';

export class ClassModel {
    async createClass(enrollment: IEnrollment): Promise<boolean> {
        const enrollmentData = new db.EnrollmentModel(enrollment);
        try {
            console.log(`${enrollmentData}`);
            await enrollmentData.save();
        } catch (error) {
            console.log('Error creating enrollment:', error);
            return false;
        }
        return true;
    }

    async readAllClasses(): Promise<IEnrollment[]> {
        return await db.EnrollmentModel.find();
    }

    async readClass(enrollmentId: string): Promise<IEnrollment> {
        const enrollmentData = await db.EnrollmentModel.findOne({ _id: enrollmentId });
        if (!enrollmentData) {
            throw new Error('readClass: class not found');
        }
        return enrollmentData;
    }

    async updateClass(oldData: IEnrollment, newData: IEnrollment): Promise<boolean> {
        try {
            await db.EnrollmentModel.updateOne({ _id: oldData._id }, newData);
            return true;
        } catch (error) {
            console.log('Error updating class:', error);
            return false;
        }
    }

    async deleteClass(enrollmentId: string): Promise<boolean> {
        try  {
            await db.EnrollmentModel.deleteOne({ _id: enrollmentId });
            return true;
        } catch (error) {
            console.log('Error deleting class:', error);
            return false;
        }
    }
}
