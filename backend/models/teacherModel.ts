import { ITeacher } from "./database/teacherSchema";
import { db } from "./database/mongodbConfig";


// getAllTeachers()
// getAllTeachersBasic()
// getTeacher(teacherId: string)
// doesTeacherExist(email: string)
// createTeacher(teacher: ITeacher)
// updateTeacher(teacherId: string, teacher: ITeacher)
// deleteTeacher(teacherId: string)
// deleteAllTeachers()

export class TeacherModel {
    // get
    async getAllTeachers(): Promise<ITeacher[]> {
        return await db.TeacherModel.find();
    }

    async getAllTeachersBasic(): Promise<ITeacher[]> {
        // maybe teachers should also have a teacherNumber generate for their start year but welp next time.
        return await db.TeacherModel.find({}, { _id: 1, firstName: 1, lastName: 1, field: 1, contactNumber: 1 }).sort('_id');
    }

    // for full information

    async getTeacher(teacherId: string): Promise<ITeacher> {
        const teacherData = await db.TeacherModel.findOne({ _id: teacherId });
        if (!teacherData) {
            throw new Error(`getTeacher: teacher ${teacherId} not found`);
        }
        return teacherData;
    }

    // create

    async doesTeacherExist(id: string): Promise<boolean> {
        const teacherExists = await db.TeacherModel.exists({ _id: id});
        if (teacherExists) {
            return true;
        }
        console.log(`Teacher with id ${id} does not exist.`)
        return false;
    }

    async createTeacher(teacher: ITeacher): Promise<ITeacher> {
        const newTeacher = new db.TeacherModel(teacher);
        return await newTeacher.save();
    }

    // update 

    async updateTeacher(teacherId: string, teacher: ITeacher): Promise<boolean> {
        try {
            const isSuccess = await db.TeacherModel.updateOne({ _id: teacherId }, teacher);
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error updating teacher: ${teacherId}-${teacher}.`, error);
            return false;
        }
    }

    // delete

    async deleteTeacher(teacherId: string): Promise<boolean> {
        try {
            const isSuccess = await db.TeacherModel.deleteOne({ _id: teacherId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting teacher: ${teacherId}.`, error);
            return false;
        }
    }

    async deleteAllTeachers(): Promise<boolean> {
        try {
            const isSuccess = await db.TeacherModel.deleteMany({});
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting all teachers.`, error);
            return false;
        }
    }
}
