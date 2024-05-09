import { IClass } from './database/teacherSchema';
import { db } from './database/mongodbConfig';

export class ClassModel {
    // assign teacher to class
    async assignTeacherToClass(classId: string, teacherId: string): Promise<boolean> {
        try {
            const isSuccess = await db.ClassModel.updateOne({ _id: classId }, { refTeacherId: teacherId });
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error assigning teacher ${teacherId} to class: ${classId}.`, error);
            return false;
        }
    }

    async unassignTeacherFromClass(classId: string): Promise<boolean> {
        try {
            const isSuccess = await db.ClassModel.updateOne({ _id: classId }, { refTeacherId: null });
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error unassigning teacher from class: ${classId}.`, error);
            return false;
        }
    }
    
    // get 
    async getClassesByTeacherId(teacherId: string): Promise<IClass[]> {
        return await db.ClassModel.find({ refTeacherId: teacherId });
    }

    async getClassesByStudentId(studentId: string): Promise<IClass[]> {
        return await db.ClassModel.find({ refStudentIds: studentId });
    }

    async getAllClasses(): Promise<IClass[]> {
        return await db.ClassModel.find();
    }

    async getClass(classId: string): Promise<IClass> {
        const classData = await db.ClassModel.findOne({ _id: classId });
        if (!classData) {
            throw new Error(`getClass: class ${classId} not found`);
        }
        return classData;
    }

    // create

    async doesClassExist(classId: string): Promise<boolean> {
        const classExists = await db.ClassModel.exists({ _id: classId });
        if (classExists) {
            return true;
        }
        console.log(`Class with id ${classId} does not exist.`)
        return false;
    }

    async createClass(classData: IClass): Promise<IClass> {
        const newClass = new db.ClassModel(classData);
        return await newClass.save();
    }

    // update

    async updateClass(classId: string, classData: IClass): Promise<boolean> {
        try {
            const isSuccess = await db.ClassModel.updateOne({ _id: classId }, classData);
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error updating class: ${classId}-${classData}.`, error);
            return false;
        }
    }

    async addStudentToClass(classId: string, studentId: string): Promise<boolean> {
        try {
            const isSuccess = await db.ClassModel.updateOne({ _id: classId }, { $push: { refStudentIds: studentId } });
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error adding student ${studentId} to class: ${classId}.`, error);
            return false;
        }
    }
    
    // delete

    async deleteClass(classId: string): Promise<boolean> {
        try {
            const isSuccess = await db.ClassModel.deleteOne({ _id: classId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting class: ${classId}.`, error);
            return false;
        }
    }

    async deleteAllClasses(): Promise<boolean> {
        try {
            const isSuccess = await db.ClassModel.deleteMany({});
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting all classes.`, error);
            return false;
        }
    }
}
