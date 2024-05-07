import { StudentModel } from "../models/studentModel";
import { IStudent } from "../models/database/studentSchema";

const studentModel = new StudentModel();

export async function studentCreate(student: IStudent): Promise<boolean> {
    return await studentModel.createStudent(student);
}

export async function studentReadAll(): Promise<IStudent[]> {
    return await studentModel.readAllStudents();
}

export async function studentRead(studentName: string): Promise<IStudent> {
    return await studentModel.readStudent(studentName);
}

export async function studentUpdate(oldStudent: IStudent, newStudent: IStudent): Promise<boolean> {
    return await studentModel.updateStudent(oldStudent, newStudent);
}

export async function studentDelete(studentName: string): Promise<boolean> {
    return await studentModel.deleteStudent(studentName);
}