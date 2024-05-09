import { UserModel } from "../models/userModel";
import { IUser, IEntity } from "../models/database/userSchema";
import { generateHash } from "../utilities/utils";
const userModel = new UserModel();

export async function userLogin(username: string, password: string): Promise<boolean> {
    const user = await userModel.readUserByUsername(username);
    if (user) {
        const inputPw = await generateHash(password);
        if (inputPw === user.password) {
            return true;
        }
    }
    return false;
}

export async function userCreate(user: IUser): Promise<boolean> {
    user.password = await generateHash(user.password);
    return await userModel.createUser(user);
}

export async function userReadAll(): Promise<IUser[]> {
    return await userModel.readAllUsers();
}

export async function userRead(userId: string): Promise<IUser> {
    return await userModel.readUser(userId);
}

export async function userUpdate(oldUser: IUser, newUser: IUser): Promise<boolean> {
    return await userModel.updateUser(oldUser, newUser);
}

export async function userDelete(userId: string): Promise<boolean> {
    return await userModel.deleteUser(userId);
}

export async function entityCreate(entity: IEntity): Promise<boolean> {
    return await userModel.createEntities(entity);
}

export async function entityReadAll(): Promise<IEntity[]> {
    return await userModel.readAllEntities();
}

export async function entityRead(entityId: string): Promise<IEntity> {
    return await userModel.readEntity(entityId);
}

export async function entityUpdate(oldEntity: IEntity, newEntity: IEntity): Promise<boolean> {
    return await userModel.updateEntity(oldEntity, newEntity);
}

export async function entityDelete(entityId: string): Promise<boolean> {
    return await userModel.deleteEntity(entityId);
}
