import { Request, Response } from "express";
import {getAllStudents, removeAllStudents, removeStudent, editStudent, fetchStudent, getAllStudentsBasic, checkIfStudentExists } from "../services/studentService";
import {addStudent, fetchStudentByUserId} from "../services/studentService";


export async function fetchAllStudentsAPI(req: Request, res: Response) {
    try {
        const students = await getAllStudents();
        if (!students) {
            res.status(400).send({
                success: "false",
                message: 'No students found'});
            return;
        }
        res.status(200).send({
            success: "true",
            message: 'Students found',
            data: students});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching students',
            log_error: error});
    }
}

export async function fetchStudentsBasicAPI(req: Request, res: Response) {
    try {
        const students = await getAllStudentsBasic();
        if (!students) {
            res.status(400).send({
                success: "false",
                message: 'No students found'});
            return;
        }
        res.status(200).send({
            success: "true",
            message: 'Students found',
            data: students});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching students',
            log_error: error});
    }
}

export async function fetchStudentAPI(req: Request, res: Response) {
    try {
        const userId:string = req.headers['userid'] as string;
        console.log("USERID: ",userId);
        const students = await fetchStudentByUserId(userId);
        if (!students) {
            res.status(400).send({
                success: "false",
                message: 'No students found'});
            return;
        }
        res.status(200).send({
            success: "true",
            message: 'Students found',
            data: students});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching students',
            log_error: error});
    }
}


export async function getStudentAPI(req: Request, res: Response) {
    try {
        const { studentNumber } = req.body;

        const studentExists = await checkIfStudentExists(studentNumber);
        if (!studentExists) {
            res.status(400).send({
                success: "false",
                message: 'Student does not exist'});
            return;
        }

        const student = await fetchStudent(studentNumber);
        if (!student) {
            res.status(400).send({
                success: "false",
                message: 'Student data not found'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Student found',
            data: student});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching student',
            log_error: error});
    }
}

export async function createStudentAPI(req: Request, res: Response) {
    try {
        const studentData = req.body;
        console.log(studentData); 
        const studentExist = await checkIfStudentExists(studentData.email);
        if (studentExist) {
            res.status(400).send({
                success: "false",
                message: 'Student already exists!'});
            return;
        }

        let student = await addStudent(studentData);
        if (!student) {
            res.status(400).send({
                success: "false",
                message: 'Error creating student'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Student created',
            data: student});
        
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error creating student',
            log_error: error});
    }
}

export async function updateStudentAPI(req: Request, res: Response) {
    try {
        const studentData = req.body;
        const { studentNumber } = req.query;
        if (!studentNumber || !studentData || typeof studentNumber !== 'string') {
            res.status(400).send({
                success: "false",
                message: 'Student number and data required'});
            return;
        }

        const studentExist = await checkIfStudentExists(studentNumber);
        if (!studentExist) {
            res.status(400).send({
                success: "false",
                message: 'Student does not exist'});
            return;
        }

        const student = await editStudent(studentNumber, studentData);
        if (!student) {
            res.status(400).send({
                success: "false",
                message: 'Error updating student'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Student updated',
            data: student});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error updating student',
            log_error: error});
    }
}

export async function removeStudentAPI(req: Request, res: Response) {
    try {
        const { studentNumber } = req.query;
        if (!studentNumber || typeof studentNumber !== 'string') {
            res.status(400).send({
                success: "false",
                message: 'Student number required'});
            return;
        }

        const studentExist = await checkIfStudentExists(studentNumber);
        if (!studentExist) {
            res.status(400).send({
                success: "false",
                message: 'Student does not exist'});
            return;
        }

        const student = await removeStudent(studentNumber);
        if (!student) {
            res.status(400).send({
                success: "false",
                message: 'Error deleting student'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Student deleted',
            data: student});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error deleting student',
            log_error: error});
    }
}

export async function removeAllStudentsAPI(req: Request, res: Response) {
    try {
        const students = await removeAllStudents();
        if (!students) {
            res.status(400).send({
                success: "false",
                message: 'No students found'});
            return;
        }
        res.status(200).send({
            success: "true",
            message: 'Students deleted',
            data: students});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error deleting students',
            log_error: error});
    }
}
