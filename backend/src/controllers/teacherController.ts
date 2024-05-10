import { Request, Response } from "express";
import {getAllTeachers, addTeacher, removeAllTeachers, removeTeacher, editTeacher, fetchTeacher, getAllTeachersBasic, checkIfTeacherExists } from "../services/teacherServices";

export async function fetchAllTeachersAPI(req: Request, res: Response) {
    try {
        const teachers = await getAllTeachers();
        if (!teachers) {
            res.status(400).send({
                success: "false",
                message: 'No teachers found'});
            return;
        }
        res.status(200).send({
            success: "true",
            message: 'Teachers found',
            data: teachers});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching teachers',
            log_error: error});
    }
}

export async function fetchTeachersBasicAPI(req: Request, res: Response) {
    try {
        const teachers = await getAllTeachersBasic();
        if (!teachers) {
            res.status(400).send({
                success: "false",
                message: 'No teachers found'});
            return;
        }
        res.status(200).send({
            success: "true",
            message: 'Teachers found',
            data: teachers});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching teachers',
            log_error: error});
    }
}

export async function getTeacherAPI(req: Request, res: Response) {
    try {
        const { email } = req.body;

        const teacherExists = await checkIfTeacherExists(email);
        if (!teacherExists) {
            res.status(400).send({
                success: "false",
                message: 'Teacher does not exist'});
            return;
        }

        const teacher = await fetchTeacher(email);
        if (!teacher) {
            res.status(400).send({
                success: "false",
                message: 'Teacher data not found'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Teacher found',
            data: teacher});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching teacher',
            log_error: error});
    }
}

export async function removeTeacherAPI(req: Request, res: Response) {
    try {
        const { email } = req.body;

        const teacherExists = await checkIfTeacherExists(email);
        if (!teacherExists) {
            res.status(400).send({
                success: "false",
                message: 'Teacher does not exist'});
            return;
        }

        const isDeleted = await removeTeacher(email);
        if (!isDeleted) {
            res.status(400).send({
                success: "false",
                message: 'Error deleting teacher'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Teacher deleted'});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error deleting teacher',
            log_error: error});
    }
}

export async function removeAllTeachersAPI(req: Request, res: Response) {
    try {
        const isDeleted = await removeAllTeachers();
        if (!isDeleted) {
            res.status(400).send({
                success: "false",
                message: 'Error deleting teachers'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'All teachers deleted'});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error deleting teachers',
            log_error: error});
    }
}

export async function editTeacherAPI(req: Request, res: Response) {
    try {
        const { email, teacherData } = req.body;

        const teacherExists = await checkIfTeacherExists(email);
        if (!teacherExists) {
            res.status(400).send({
                success: "false",
                message: 'Teacher does not exist'});
            return;
        }

        const isUpdated = await editTeacher(email, teacherData);
        if (!isUpdated) {
            res.status(400).send({
                success: "false",
                message: 'Error updating teacher'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Teacher updated'});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error updating teacher',
            log_error: error});
    }
}

export async function addTeacherAPI(req: Request, res: Response) {
    try {
        const teacherData = req.body;
        const teacherExist = await checkIfTeacherExists(teacherData.email);
        if (teacherExist) {
            res.status(400).send({
                success: "false",
                message: 'Teacher already exists'});
            return;
        }

        const teacher = await addTeacher(teacherData);
        if (!teacher) {
            res.status(400).send({
                success: "false",
                message: 'Error adding teacher'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Teacher added',
            data: teacher});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error adding teacher',
            log_error: error});
    }
}