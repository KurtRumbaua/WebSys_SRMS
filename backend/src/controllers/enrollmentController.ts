import { Request, Response } from 'express';
import { enrollmentCreate, enrollmentDelete, enrollmentRead, enrollmentReadAll, enrollmentUpdate } from '../services/enrollmentService';

export async function createEnrollmentAPI(req: Request, res: Response) {
    const enrollmentData = req.body;
    const success = await enrollmentCreate(enrollmentData);
    if (success) {
        res.status(201).send('Enrollment created');
    } else {
        res.status(400).send('Enrollment not created');
    }
}

export async function readAllEnrollmentsAPI(req: Request, res: Response) {
    const enrollments = await enrollmentReadAll();
    res.status(200).json(enrollments);
}

export async function readEnrollmentAPI(req: Request, res: Response) {
    const enrollmentId = req.params.id;
    const enrollment = await enrollmentRead(enrollmentId);
    res.status(200).json(enrollment);
}

export async function updateEnrollmentAPI(req: Request, res: Response) {
    const oldEnrollment = req.body.oldData;
    const newEnrollment = req.body.newData;
    const success = await enrollmentUpdate(oldEnrollment, newEnrollment);
    if (success) {
        res.status(200).send('Enrollment updated');
    } else {
        res.status(400).send('Enrollment not updated');
    }
}

export async function deleteEnrollmentAPI(req: Request, res: Response) {
    const enrollmentId = req.params.id;
    const success = await enrollmentDelete(enrollmentId);
    if (success) {
        res.status(200).send('Enrollment deleted');
    } else {
        res.status(400).send('Enrollment not deleted');
    }
}