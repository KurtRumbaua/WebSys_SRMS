import { ClassModel } from '../models/classModel';
import { IClass } from '../models/database/teacherSchema';

const classModel = new ClassModel();

export async function injectClassTemplate(classData: IClass, session: any): Promise <boolean> {
    return await classModel.populateClass(classData, session);
}

export async function getClassesByTeacher(teacherId: string): Promise <IClass[]> {
    return await classModel.getClassesByTeacherId(teacherId);
}

export async function getClassesByStudent(studentNumber: string): Promise <IClass[]> {
    return await classModel.getClassesByStudentNumber(studentNumber);
}

export async function getAllClasses(): Promise <IClass[]| boolean> {
    const classes = await classModel.getAllClasses();
    if (!classes) {
        return false;
    }
    return classes;
}

export async function getClassInfo(classId: string): Promise <IClass> {
    return await classModel.getClass(classId);
}
//might be redundant
export async function checkIfClassExists(classId: string): Promise <boolean> {
    return await classModel.doesClassExist(classId);
}

export async function removeAllClasses(): Promise <boolean> {
    return await classModel.deleteAllClasses();
}

export async function removeClass(classId: string): Promise <boolean> {
    return await classModel.deleteClass(classId);
}

export async function designateClassTeacher(teacherId: string, classId: string): Promise <boolean> {
    return await classModel.assignTeacherToClass(teacherId, classId);
}

export async function removeClassTeacher(classId: string): Promise <boolean> {
    return await classModel.unassignTeacherFromClass(classId);
}

export async function editClass(classId: string, classData: IClass): Promise <boolean> {
    return await classModel.updateClass(classId, classData);
}

export async function addStudent(classId: string, studentNumber: string): Promise <boolean> {
    return await classModel.addStudentToClass(classId, studentNumber);
}