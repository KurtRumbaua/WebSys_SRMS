import e, { Request, Response } from 'express';
import { userCreate, userDelete, userRead, userReadAll, userUpdate, entityCreate, entityDelete, entityRead, entityReadAll, entityUpdate } from '../services/userService';

export async function createUserAPI(req: Request, res: Response) {
    const userData = req.body;
    const success = await userCreate(userData);
    if (success) {
        res.status(201).send('User created');
    } else {
        res.status(400).send('User not created');
    }
}

export async function readAllUsersAPI(req: Request, res: Response) {
    const users = await userReadAll();
    res.status(200).json(users);
}

export async function readUserAPI(req: Request, res: Response) {
    const userId = req.params.id;
    const user = await userRead(userId);
    res.status(200).json(user);
}

export async function updateUserAPI(req: Request, res: Response) {
    const oldUser = req.body.oldData;
    const newUser = req.body.newData;
    const success = await userUpdate(oldUser, newUser);
    if (success) {
        res.status(200).send('User updated');
    } else {
        res.status(400).send('User not updated');
    }
}

export async function deleteUserAPI(req: Request, res: Response) {
    const userId = req.params.id;
    const success = await userDelete(userId);
    if (success) {
        res.status(200).send('User deleted');
    } else {
        res.status(400).send('User not deleted');
    }
}

export async function createEntityAPI(req: Request, res: Response) {
    const entityData = req.body;
    const success = await entityCreate(entityData);
    if (success) {
        res.status(201).send('Entity created');
    } else {
        res.status(400).send('Entity not created');
    }
}

export async function readAllEntitiesAPI(req: Request, res: Response) {
    const entities = await entityReadAll();
    res.status(200).json(entities);
}

export async function readEntityAPI(req: Request, res: Response) {
    const entityId = req.params.id;
    const entity = await entityRead(entityId);
    res.status(200).json(entity);
}

export async function updateEntityAPI(req: Request, res: Response) {
    const oldEntity = req.body.oldData;
    const newEntity = req.body.newData;
    const success = await entityUpdate(oldEntity, newEntity);
    if (success) {
        res.status(200).send('Entity updated');
    } else {
        res.status(400).send('Entity not updated');
    }
}

export async function deleteEntityAPI(req: Request, res: Response) {
    const entityId = req.params.id;
    const success = await entityDelete(entityId);
    if (success) {
        res.status(200).send('Entity deleted');
    } else {
        res.status(400).send('Entity not deleted');
    }
}
