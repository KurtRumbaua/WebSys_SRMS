import { EnrollmentModel } from '../models/enrollmentModel';
import { EnrollmentStatus, IStudent } from '../models/database/studentSchema';
import { StudentModel } from '../models/studentModel';

const enrollmentModel = new EnrollmentModel();
const studentModel = new StudentModel();

export async function updateEnrollmentStatus(studentNumber: string, status: EnrollmentStatus): Promise<boolean> {
    try {
        const student = await studentModel.getStudent(studentNumber);
        if (!student) {
            throw new Error(`updateEnrollmentStatus: student ${studentNumber} not found`);
        }
        return await studentModel.updateStudentEnrollmentStatus(student.studentNumber, status);
    } catch (error) {
        console.log(`Error updating enrollment status: ${studentNumber}-${status}`, error);
        return false;
    }
}

export async function fetchNotEnrolled(): Promise<IStudent[]> {
    try {
        return await enrollmentModel.getNotEnrolled();
    } catch (error) {
        console.log('Error fetching not enrolled students', error);
        return [];
    }
}

export async function fetchPendingEnrollments(): Promise<IStudent[]> {
    try {
        return await enrollmentModel.getPendingEnrollments();
    } catch (error) {
        console.log('Error fetching pending enrollments', error);
        return [];
    }
}

export async function fetchEnrolledStudents(): Promise<IStudent[]> {
    try {
        return await enrollmentModel.getEnrolledStudents();
    } catch (error) {
        console.log('Error fetching enrolled students', error);
        return [];
    }
}

export async function fetchAllEnrollments(): Promise<IStudent[]> {
    try {
        return await enrollmentModel.getAllEnrollments();
    } catch (error) {
        console.log('Error fetching all enrollments', error);
        return [];
    }
}

export async function fetchEnrolledInfo(studentNumber: string): Promise<IStudent | boolean> {
    try {
        return await enrollmentModel.getEnrolledInfo(studentNumber);
    } catch (error) {
        console.log(`Error fetching enrolled info: ${studentNumber}`, error);
        return false;
    }
}
