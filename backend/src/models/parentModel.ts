import { IParent } from "./database/parentSchema";
import { db } from "./database/mongodbConfig";

export class ParentModel {
    // get
    async getParents(): Promise<IParent[]> {
        return await db.ParentModel.find();
    }

    async getParent(parentId: string): Promise<IParent> {
        const parentData = await db.ParentModel.findOne({ _id: parentId });
        if (!parentData) {
            throw new Error(`getParent: parent ${parentId} not found`);
        }
        return parentData;
    }

    async getParentByStudentId(refStudentId: string): Promise<IParent[]> {
        return await db.ParentModel.find({ refStudentIds: refStudentId });
    }

    // create
    async createParent(parent: IParent): Promise<IParent> {
        const newParent = new db.ParentModel(parent);
        return await newParent.save();
    }

    // update
    async updateParent(parentId: string, parent: IParent): Promise<boolean> {
        try {
            const isSuccess = await db.ParentModel.updateOne({ _id: parentId }, parent);
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error updating parent ${parentId}-${parent}.`, error);
            return false;
        }
    }

    // delete ; not gonna be used unless admin
    async deleteParent(parentId: string): Promise<boolean> {
        try {
            const isSuccess = await db.ParentModel.deleteOne({ _id: parentId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting parent ${parentId}.`, error);
            return false;
        }
    }

    async deleteAllParents(): Promise<boolean> {
        try {
            const isSuccess = await db.ParentModel.deleteMany({});
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting all parents.`, error);
            return false;
        }
    }

    async deleteParentByStudentId(refStudentId: string): Promise<boolean> {
        try {
            const isSuccess = await db.ParentModel.deleteMany({ refStudentIds: refStudentId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting parent by student id ${refStudentId}.`, error);
            return false;
        }
    }
}