import { IGrade } from "./database/gradeSchema";
import { db } from "./database/mongodbConfig";
import { Field } from "./database/teacherSchema";

export class GradeModel {
    // get
    async getGrades(refStudentId: string, subject: Field): Promise<IGrade[]> {
        return await db.GradeModel.find({ refStudentId, subject });
    }
    
    async getGradesByStudentId(refStudentId: string): Promise<IGrade[]> {
        return await db.GradeModel.find({ refStudentId });
    }

    async getGrade(gradeId: string): Promise<IGrade> {
        const gradeData = await db.GradeModel.findOne({ _id: gradeId });
        if (!gradeData) {
            throw new Error(`getGrade: grade ${gradeId} not found`);
        }
        return gradeData;
    }

    // create

    async createGrade(gradeData: IGrade): Promise<IGrade> {
        const newGrade = new db.GradeModel(gradeData);
        return await newGrade.save();
    }

    // update

    async updateGrade(gradeId: string, grade: IGrade): Promise<boolean> {
        try {
            const isSuccess = await db.GradeModel.updateOne({ _id: gradeId }, grade);
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error updating grade ${gradeId}-${grade}.`, error);
            return false;
        }
    }

    // delete ; should not be used?

    async deleteGrade(gradeId: string): Promise<boolean> {
        try {
            const isSuccess = await db.GradeModel.deleteOne({ _id: gradeId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting grade ${gradeId}.`, error);
            return false;
        }
    }

}