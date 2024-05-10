import { TeacherModel } from "../models/teacherModel";
import { ITeacher } from "../models/database/teacherSchema";

const teacherModel = new TeacherModel();

export async function checkIfTeacherExists(email: string): Promise<boolean>{
    return await teacherModel.doesTeacherExist(email);
}

export async function getAllTeachers(): Promise<ITeacher[]| boolean> {
    const queryTeachers = await teacherModel.getAllTeachers();
    if (!queryTeachers) {
        return false;
    }
    return queryTeachers;
}

export async function getAllTeachersBasic(): Promise<ITeacher[]| boolean> {
    const queryTeachers = await teacherModel.getAllTeachersBasic();
    if (!queryTeachers) {
        return false;
    }
    return queryTeachers;
}

export async function addTeacher(teacherData: ITeacher): Promise<ITeacher> {
    return await teacherModel.createTeacher(teacherData);
}

export async function fetchTeacher(teacherId: string): Promise<ITeacher> {
    return await teacherModel.getTeacher(teacherId);
}

export async function editTeacher(teacherId: string, teacherData: ITeacher): Promise<boolean> {
    return await teacherModel.updateTeacher(teacherId, teacherData);
}

export async function removeTeacher(teacherId: string): Promise<boolean> {
    return await teacherModel.deleteTeacher(teacherId);
}

export async function removeAllTeachers(): Promise<boolean> {
    return await teacherModel.deleteAllTeachers();
}