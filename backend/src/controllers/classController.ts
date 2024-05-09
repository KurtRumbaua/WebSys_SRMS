import { Request, Response } from 'express';
import { classCreate, classDelete, classRead, classReadAll, classUpdate } from '../services/classService';

export async function createClassAPI(req: Request, res: Response) {
    const classData = req.body;
    const success = await classCreate(classData);
    if (success) {
        res.status(201).send('Class created');
    } else {
        res.status(400).send('Class not created');
    }
}

export async function readAllClassesAPI(req: Request, res: Response) {
    const classes = await classReadAll();
    res.status(200).json(classes);
}

export async function readClassAPI(req: Request, res: Response) {
    const className = req.params.name;
    const classroom = await classRead(className);
    res.status(200).json(classroom);
}

export async function updateClassAPI(req: Request, res: Response) {
    const oldClass = req.body.oldData;
    const newClass = req.body.newData;
    const success = await classUpdate(oldClass, newClass);
    if (success) {
        res.status(200).send('Class updated');
    } else {
        res.status(400).send('Class not updated');
    }
}

export async function deleteClassAPI(req: Request, res: Response) {
    const className = req.params.name;
    const success = await classDelete(className);
    if (success) {
        res.status(200).send('Class deleted');
    } else {
        res.status(400).send('Class not deleted');
    }
}

