import { Request, Response } from 'express';
import { removeUser, checkIfUserExists, addUser, getAllUsers, validateLogin, fetchUserByEmail, getUserRole } from '../services/userService';

export async function registerUserAPI(req: Request, res: Response) {
    try {
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
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error registering user',
            log_error: error});
    }
}

export async function fetchAllUsersAPI(req: Request, res: Response) {
    try {
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
            
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching users',
            log_error: error});
    }

}

export async function loginUserAPI(req: Request, res: Response) {
    try {
        console.log("data",req.body);
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
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error logging in',
            log_error: error});
    }
}

export async function getUserRoleAPI(req: Request, res: Response) {
    try {
        const email:string = req.headers['email'] as string;

        const userExists = await checkIfUserExists(email);
        if (!userExists) {
            res.status(400).send({
                success: "false",
                message: 'User not found'});
            return;
        }

        const role = await getUserRole(email);
        if (!role) {
            res.status(400).send({
                success: "false",
                message: 'Role not found'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Role found',
            data: role});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching role',
            log_error: error});
    }
}

export async function deleteUserAPI(req: Request, res: Response) {
    try {
        const { email } = req.body;

        const userExists = await checkIfUserExists(email);
        if (!userExists) {
            res.status(400).send({
                success: "false",
                message: 'User not found'});
            return;
        }

        const isDeleted = await removeUser(email);
        if (!isDeleted) {
            res.status(400).send({
                success: "false",
                message: 'User not deleted'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'User deleted'});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error deleting user',
            log_error: error});
    }
}

export async function getUserByEmailAPI(req: Request, res: Response) {
    try {
        //const { email } = req.body;
        const email:string = req.headers['email'] as string;

        const userExists = await checkIfUserExists(email);
        if (!userExists) {
            res.status(400).send({
                success: "false",
                message: 'User not found'});
            return;
        }

        const userData = await fetchUserByEmail(email);
        if (!userData) {
            res.status(400).send({
                success: "false",
                message: 'User not found'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'User found',
            data: userData});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching user',
            log_error: error});
    }
}
