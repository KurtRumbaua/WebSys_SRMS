import { Request, Response } from 'express';
import { checkIfUserExists, addUser, getAllUsers } from '../services/userService';

export async function registerUserAPI(req: Request, res: Response) {
    const userData = req.body;

    const doesUserExist = await checkIfUserExists(userData.email);
    if (doesUserExist) {
        res.status(400).send({
            success: "false",
            message: 'User is already registered!'});
        return;
        
    }

    const success = await addUser(userData);
    if (!success) {
        res.status(400).send({
            success: "false",
            message: 'User not registered'});
        return;
    }

    res.status(201).send({
        success: "true",
        message:'User registered',
        data: success});
}

export async function fetchAllUsersAPI(req: Request, res: Response) {
    const users = await getAllUsers();
    if (!users) {
        res.status(400).send({
            success: "false",
            message: 'No users found'});
        return;
    }
    res.status(200).send({
        success: "true",
        message: 'Users found',
        data: users});
}