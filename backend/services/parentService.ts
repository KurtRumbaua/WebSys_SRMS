import { IParent } from "../models/database/parentSchema";
import { ParentModel } from "../models/parentModel";

const parentModel = new ParentModel();

export async function fetchParents(): Promise<IParent[]> {
    return await parentModel.getParents();
}

export async function fetchParent(parentId: string): Promise<IParent> {
    return await parentModel.getParent(parentId);
}

export async function fetchParentByStudentNumber(studentNumber: string): Promise<IParent[]> {
    return await parentModel.getParentBystudentNumber(studentNumber);
}

export async function createParent(parent: IParent): Promise<IParent> {
    return await parentModel.createParent(parent);
}

export async function updateParent(parentId: string, parent: IParent): Promise<boolean> {
    return await parentModel.updateParent(parentId, parent);
}

export async function deleteParent(parentId: string): Promise<boolean> {
    return await parentModel.deleteParent(parentId);
}

export async function deleteAllParents(): Promise<boolean> {
    return await parentModel.deleteAllParents();
}

export async function deleteParentByStudentNumber(refStudentId: string): Promise<boolean> {
    return await parentModel.deleteParentByStudentNumber(refStudentId);
}