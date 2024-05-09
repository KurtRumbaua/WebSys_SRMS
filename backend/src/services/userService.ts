import { IUser } from "../models/database/userSchema";
import { UserModel } from "../models/userModel";
import { generateHash } from "../utilities/utils";
const userModel = new UserModel();

export async function checkIfUserExists(email: string): Promise<boolean>{
    return await userModel.doesUserExist(email);
}

export async function addUser(userData: IUser): Promise<IUser> {
    const hashedPassword = await generateHash(userData.password);
    userData.password = hashedPassword;
    return await userModel.createUser(userData);
}

export async function getAllUsers(): Promise<IUser[] | boolean> {
    const usersQuery = await userModel.getAllUsers();
    if (!usersQuery) {
        return false;
    }
    return usersQuery;
}

export async function validateLogin(email: string, password: string): Promise<boolean> {
    const user = await userModel.getUserByEmail(email);
    if (!user) {
        return false;
    }

    const hashPass = await generateHash(password);
    if (hashPass === user.password) {
        return true;
    }
    console.log(`Wrong password for user ${email}.`)
    return false;
}

export async function fetchUserByEmail(email: string): Promise<IUser> {
    return await userModel.getUserByEmail(email);
}

export async function removeUser(email: string): Promise<boolean> {
    return await userModel.deleteUser(email);
}