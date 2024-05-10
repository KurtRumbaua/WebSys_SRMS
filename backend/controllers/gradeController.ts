import { Request, Response } from 'express';
import { injectGradeTemplate, getGradeBySubject, getGradeInfo, getGradesByStudent, removeGrade, updateGrade, createGrade } from '../services/gradeService';
import { Field } from '../models/database/teacherSchema';
import { IGrade } from '../models/database/teacherSchema';
import { startSession } from 'mongoose';

// call this for every student created.
export async function populateGradesAPI(req: Request, res: Response) {
    const session = await startSession();
    session.startTransaction();
    try {
        const { studentNumber } = req.body; 
        for (let subject in Field) {
            const subjectKey = subject as keyof typeof Field;
            console.log(`Assigning grade for ${Field[subjectKey]}`);
            const gradeData: IGrade = {
                refStudentId: studentNumber,
                subject: Field[subjectKey],
                assignment_1: 0,
                assignment_2: 0,
                written_task: 0,
                performance_task: 0,
                final_exam: 0
            }
            await injectGradeTemplate(gradeData, session);
        }
        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        console.error("Error creating classes: ", error);
        res.status(400).send({
            success: "false",
            message: "Error creating classes",
            log_error: error
        });
    } finally {
        session.endSession();
        if (!res.headersSent) {
            res.status(200).send({
                success: "true",
                message: "Classes created"
            });
        }
    }
}

export async function getGradesAPI(req: Request, res: Response) {
    try {
        const { studentNumber } = req.body;
        const grades = await getGradesByStudent(studentNumber);
        res.status(200).send({
            success: "true",
            message: "Grades fetched",
            data: grades
        });
    } catch (error) {
        console.error("Error fetching grades: ", error);
        res.status(400).send({
            success: "false",
            message: "Error fetching grades",
            log_error: error
        });
    }
}

export async function getGradeAPI(req: Request, res: Response) {
    try {
        const { gradeId } = req.body;
        const grade = await getGradeInfo(gradeId);
        res.status(200).send({
            success: "true",
            message: "Grade fetched",
            data: grade
        });
    } catch (error) {
        console.error("Error fetching grade: ", error);
        res.status(400).send({
            success: "false",
            message: "Error fetching grade",
            log_error: error
        });
    }
}

// for teachers?
export async function getGradeBySubjectAPI(req: Request, res: Response) {
    try {
        //const { studentNumber, subject } = req.body;
        const studentNumber: string = req.headers['studentnumber'] as string;
        const subject: string = req.headers['subject'] as string;
        console.log("YES", studentNumber, subject);
        const grades = await getGradeBySubject(studentNumber, subject);
        res.status(200).send({
            success: "true",
            message: "Grades fetched",
            data: grades
        });
    } catch (error) {
        console.error("Error fetching grades: ", error);
        res.status(400).send({
            success: "false",
            message: "Error fetching grades",
            log_error: error
        });
    }
}

export async function createGradeAPI(req: Request, res: Response) {
    try {
        const gradeData: IGrade = req.body;
        const grade = await createGrade(gradeData);
        res.status(200).send({
            success: "true",
            message: "Grade created",
            data: grade
        });
    } catch (error) {
        console.error("Error creating grade: ", error);
        res.status(400).send({
            success: "false",
            message: "Error creating grade",
            log_error: error
        });
    }
}

export async function updateGradeAPI(req: Request, res: Response) {
    try {
        const { gradeId, subject, assignment_1, assignment_2, written_task, performance_task, final_exam, refStudentId } = req.body;
        if (!gradeId) { 
            res.status(400).send({
                success: "false",
                message: "gradeId is required"
            });
            return;
        }
        const oldGrade = await getGradeInfo(gradeId);
        const gradeData: IGrade = {
            refStudentId: refStudentId || oldGrade.refStudentId,
            subject: subject || oldGrade.subject,
            assignment_1: assignment_1 || oldGrade.assignment_1,
            assignment_2: assignment_2 || oldGrade.assignment_2,
            written_task: written_task || oldGrade.written_task,
            performance_task: performance_task || oldGrade.performance_task,
            final_exam: final_exam || oldGrade.final_exam
        }

        const success = await updateGrade(gradeId, gradeData);
        res.status(200).send({
            success: "true",
            message: "Grade updated",
            data: success
        });
    } catch (error) {
        console.error("Error updating grade: ", error);
        res.status(400).send({
            success: "false",
            message: "Error updating grade",
            log_error: error
        });
    }
}

export async function deleteGradeAPI(req: Request, res: Response) {
    try {
        const { gradeId } = req.body;
        const success = await removeGrade(gradeId);
        res.status(200).send({
            success: "true",
            message: "Grade deleted",
            data: success
        });
    } catch (error) {
        console.error("Error deleting grade: ", error);
        res.status(400).send({
            success: "false",
            message: "Error deleting grade",
            log_error: error
        });
    }
}
