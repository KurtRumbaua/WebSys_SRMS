import { IStudent, EnrollmentStatus } from "./database/studentSchema";
import { IUser } from "../models/database/userSchema";
import { db } from './database/mongodbConfig';
import { generatestudentNumber, getLocalDate } from "../utilities/utils";

export class StudentModel {
    //student numbers are used not student Id. 

    // get 
    // for basic information
    async getAllStudentsBasic(): Promise<IStudent[]> {
        return await db.StudentModel.find(
          {enrollmentStatus: EnrollmentStatus.ENROLLED}, 
          { 
            firstName: 1, 
            lastName: 1,
            middleName: 1,
            gradeLevel: 1, 
            section: 1, 
            address: 1,
            contactNumber: 1,
            email: 1,
          }).sort('_id'); //leaN? -_id for desc.
    }

    
    async getAllStudents(): Promise<IStudent[]> {
        return await db.StudentModel.find();
    }
    // for full information
    async getStudent(studentNumber: string): Promise<IStudent> {
        const studentData = await db.StudentModel.findOne({ studentNumber: studentNumber });
        if (!studentData) {
            throw new Error(`getStudent: student ${studentNumber} not found`);
        }
        return studentData;
    }

    async getStudentByUserId(userId: string): Promise<IStudent> {
        const parentData = await db.ParentModel.findOne({ userId: userId});
        if (parentData) {
            const studentData = await db.StudentModel.findOne({ parentId: parentData._id});
            console.log(`getStudentByUserId: studentData: ${studentData}`);
            if (!studentData) {
                throw new Error(`getStudentByUserId: student with userId ${userId} not found`);
            }
            return studentData;
        }
        throw new Error(`getStudentByUserId: student with userId ${userId} not found`);
    }
    
    // for creating a new student
    async doesStudentExist(studentNumber: string): Promise<boolean> {
        const studentExists = await db.StudentModel.exists({ studentNumber: studentNumber });
        if (studentExists) {
            return true;
        }
        console.log(`Student with student number ${studentNumber} does not exist.`)
        return false;
    }
    // create
    async createStudent(student: IStudent): Promise<IStudent> {
        student.enrollmentStatus = EnrollmentStatus.PENDING;
        student.enrollmentDate = await getLocalDate();

        let studentNo = await generatestudentNumber();
        let isUnique = await this.doesStudentExist(studentNo);
        while (isUnique) {
            studentNo = await generatestudentNumber();
            isUnique = await this.doesStudentExist(studentNo);
        }

        student.studentNumber = studentNo;
        const newStudent = new db.StudentModel(student);
        return await newStudent.save();
    }

    // update
    async updateStudent(studentNumber: string, student: IStudent): Promise<boolean> {
        try {
            const isSuccess = await db.StudentModel.updateOne({ studentNumber: studentNumber }, student);
            return isSuccess.modifiedCount > 0; // ? idk if modifiedCount is a good indicator.
        } catch (error) {
            console.log(`Error updating student: ${studentNumber}-${student}`, error);
            return false;
        }
    }

    async updateStudentEnrollmentStatus(studentNumber: string, status: EnrollmentStatus): Promise<boolean> {
        try {
            const isSuccess = await db.StudentModel.updateOne({ studentNumber: studentNumber }, { enrollmentStatus: status });
            return isSuccess.modifiedCount > 0; // ? idk if modifiedCount is a good indicator.
        } catch (error) {
            console.log(`Error updating student: ${studentNumber}-${status}`, error);
            return false;
        }
    }
    
    // delete
    async deleteStudent(studentNumber: string): Promise<boolean> {
        try {
            const isSuccess = await db.StudentModel.deleteOne({ studentNumber: studentNumber });
            return isSuccess.deletedCount > 0; // ?  if false it means data retained.
        } catch (error) {
            console.log(`Error deleting student: ${studentNumber}.`, error);
            return false;
        }
    }

    async deleteAllStudents(): Promise<boolean> {
        try {
            const isSuccess = await db.StudentModel.deleteMany({});
            return isSuccess.deletedCount > 0; // ? if false it means data retained.
        } catch (error) {
            console.log(`Error deleting all students.`, error);
            return false;
        }
    }

}

/* Notes
Student can not be reassigned to class, selected upon registration.
*/
