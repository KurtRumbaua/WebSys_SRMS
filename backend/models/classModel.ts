import { IClass } from './database/classSchema';
import { db } from './database/mongodbConfig';

export class ClassModel {
    async createClass(classroom: IClass): Promise<boolean> {
        const classExists = await db.ClassModel.exists({ name: classroom.name });
        if (classExists) {
            return false;
        }
        const classData = new db.ClassModel(classroom);
        try {
            console.log(`${classData}`);
            await classData.save();
        } catch (error) {
            console.log('Error creating class:', error);
            return false;
        }
        return true;
    }
    
    async readAllClasses(): Promise<IClass[]> {
        return await db.ClassModel.find();
    }

    async readClass(className: string): Promise<IClass> {
        const classData = await db.ClassModel.findOne({ name: className });
        if (!classData) {
            throw new Error('readClass: class not found');
        }
        return classData;
    }

    async updateClass(oldClass: IClass, newClass: IClass): Promise<boolean> {
        try {
            await db.ClassModel.updateOne({ name: oldClass.name }, newClass);
            return true;
        } catch (error) {
            console.log('Error updating class:', error);
            return false;
        }
    }

    async deleteClass(className: string): Promise<boolean> {
        try  {
            await db.ClassModel.deleteOne({ name: className });
            return true;
        } catch (error) {
            console.log('Error deleting class:', error);
            return false;
        }
    }
}
