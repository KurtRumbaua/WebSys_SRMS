import { Request, Response } from "express";
import { studentCreate, studentDelete, studentRead, studentReadAll, studentUpdate } from "../services/studentService";

export async function createStudentAPI(req: Request, res: Response) {
    const studentData = req.body;
    const success = await studentCreate(studentData);
    if (success) {
        res.status(201).send('Student created');
    } else {
        res.status(400).send('Student not created');
    }
}

export async function readAllStudentsAPI(req: Request, res: Response) {
    const students = await studentReadAll();
    res.status(200).json(students);
}

export async function readStudentAPI(req: Request, res: Response) {
    const studentId = req.params.id;
    const student = await studentRead(studentId);
    res.status(200).json(student);
}

export async function updateStudentAPI(req: Request, res: Response) {
    const oldStudent = req.body.oldData;
    const newStudent = req.body.newData;
    const success = await studentUpdate(oldStudent, newStudent);
    if (success) {
        res.status(200).send('Student updated');
    } else {
        res.status(400).send('Student not updated');
    }
}

export async function deleteStudentAPI(req: Request, res: Response) {
    const studentId = req.params.id;
    const success = await studentDelete(studentId);
    if (success) {
        res.status(200).send('Student deleted');
    } else {
        res.status(400).send('Student not deleted');
    }
}

