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