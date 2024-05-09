import { ClassModel } from '../models/classModel';
import { IClass } from '../models/database/classSchema';

const classModel = new ClassModel();

export async function classCreate(classroom: IClass): Promise<boolean> {
    return await classModel.createClass(classroom);
}

export async function classReadAll(): Promise<IClass[]> {
    return await classModel.readAllClasses();
}

export async function classRead(className: string): Promise<IClass> {
    return await classModel.readClass(className);
}

export async function classUpdate(oldClass: IClass, newClass: IClass): Promise<boolean> {
    return await classModel.updateClass(oldClass, newClass);
}

export async function classDelete(className: string): Promise<boolean> {
    return await classModel.deleteClass(className);
}