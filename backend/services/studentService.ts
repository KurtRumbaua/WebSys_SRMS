import { StudentModel } from "../models/studentModel";
import { IStudent } from "../models/database/studentSchema";

const studentModel = new StudentModel();

export async function checkIfStudentExists(email: string): Promise<boolean>{
    return await studentModel.doesStudentExist(email);
}

export async function getAllStudents(): Promise<IStudent[]| boolean> {
    const queryStudents = await studentModel.getAllStudents();
    if (!queryStudents) {
        return false;
    }
    return queryStudents;
}

export async function getAllStudentsBasic(): Promise<IStudent[]| boolean> {
    const queryStudents = await studentModel.getAllStudentsBasic();
    if (!queryStudents) {
        return false;
    }
    return queryStudents;
}

export async function addStudent(studentData: IStudent): Promise<IStudent> {
    return await studentModel.createStudent(studentData);
}

export async function fetchStudent(studentNumber: string): Promise<IStudent> {
    return await studentModel.getStudent(studentNumber);
}

export async function editStudent(studentNumber: string, studentData: IStudent): Promise<boolean> {
    return await studentModel.updateStudent(studentNumber, studentData);
}

export async function removeStudent(studentNumber: string): Promise<boolean> {
    return await studentModel.deleteStudent(studentNumber);
}

export async function removeAllStudents(): Promise<boolean> {
    return await studentModel.deleteAllStudents();
}