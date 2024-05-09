import { Request, Response } from 'express';
import { checkIfUserExists, addUser, getAllUsers, validateLogin, fetchUserByEmail } from '../services/userService';

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

export async function loginUserAPI(req: Request, res: Response) {
    const { email, password } = req.body;

    const userExists = await checkIfUserExists(email);
    if (!userExists) {
        res.status(400).send({
            success: "false",
            message: 'User not found'});
        return;
    }

    const isValidated = await validateLogin(email, password);
    if (!isValidated) {
        res.status(400).send({
            success: "false",
            message: 'Invalid login credentials'});
        return;
    }
    const userData = await fetchUserByEmail(email);

    res.status(200).send({
        success: "true",
        message: 'User logged in',
        data: userData
    });
}

//logout is a frontend fuction that only redirects to homepage. 