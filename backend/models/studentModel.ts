import { IStudent } from "./database/studentSchema";
import { db } from './database/mongodbConfig';

export class StudentModel {
    async createStudent(student: IStudent): Promise<boolean> {
        const studentData = new db.StudentModel(student);
        try {
            console.log(`${studentData}`);
            await studentData.save();
        } catch (error) {
            console.log('Error creating student:', error);
            return false;
        }
        return true;
    }

    async readAllStudents(): Promise<IStudent[]> {
        return await db.StudentModel.find();
    }

    async readStudent(studentId: string): Promise<IStudent> {
        const studentData = await db.StudentModel.findOne({ _id: studentId });
        if (!studentData) {
            throw new Error('readStudent: student not found');
        }
        return studentData;
    }

    async updateStudent(oldData: IStudent, newData: IStudent): Promise<boolean> {
        try {
            await db.StudentModel.updateOne({ _id: oldData._id }, newData);
            return true;
        } catch (error) {
            console.log('Error updating student:', error);
            return false;
        }
    }

    async deleteStudent(studentId: string): Promise<boolean> {
        try  {
            await db.StudentModel.deleteOne({ _id: studentId });
            return true;
        } catch (error) {
            console.log('Error deleting student:', error);
            return false;
        }
    }
}
