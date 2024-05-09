import { IGrade } from "../models/database/teacherSchema";
import { GradeModel } from "../models/gradeModel";

const gradeModel = new GradeModel();

export async function injectGradeTemplate(gradeData: IGrade, session: any): Promise <boolean> {
    return await gradeModel.populateGrade(gradeData, session);
}

export async function getGradeBySubject( studentId: string, subject: string): Promise <IGrade[]> {
    return await gradeModel.getGrades(studentId, subject);
}

export async function getGradesByStudent(studentNumber: string): Promise <IGrade[]> {
    return await gradeModel.getGradesByStudentId(studentNumber);
}

export async function getGradeInfo(gradeId: string): Promise <IGrade> {
    return await gradeModel.getGrade(gradeId);
}

export async function removeGrade(gradeId: string): Promise <boolean> {
    return await gradeModel.deleteGrade(gradeId);
}

export async function updateGrade(gradeId: string, gradeData: IGrade): Promise <boolean> {
    return await gradeModel.updateGrade(gradeId, gradeData);
}

export async function createGrade(gradeData: IGrade): Promise <IGrade> {
    return await gradeModel.createGrade(gradeData);
}