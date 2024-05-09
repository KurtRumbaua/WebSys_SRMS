import { IUser } from "./database/userSchema";
import { db } from './database/mongodbConfig';

export class UserModel {
    // get
    async getAllUsers(): Promise<IUser[]> {
        return await db.UserModel.find();
    }

    async getUserByEmail(email: string): Promise<IUser> {
        const userData = await db.UserModel.findOne({ email: email });
        if (!userData) {
            throw new Error(`getUserByEmail: user ${email} not found`);
        }
        return userData;
    }
    
    async getUser(userId: string): Promise<IUser> {
        const userData = await db.UserModel.findOne({ _id: userId });
        if (!userData) {
            throw new Error(`getUser: user ${userId} not found`);
        }
        return userData;
    }

    async doesUserExist(email: string): Promise<boolean> {
        const userExists = await db.UserModel.exists({ email: email });
        if (userExists) {
            return true;
        }
        console.log(`User with email ${email} does not exist.`)
        return false;
    }

    // create
    async createUser(user: IUser): Promise<IUser> {
        const newUser = new db.UserModel(user);
        return await newUser.save();
    }

    // not used?

    // update
    async updateUser(email: string, user: IUser): Promise<boolean> {
        try {
            await db.UserModel.updateOne({ email: email }, user);
        } catch (error) {
            console.log(`Error updating user: ${email}-${user}.`, error);
            return false;
        }
        return true;
    }

    // delete
    async deleteUser(email: string): Promise<boolean> {
        try {
            await db.UserModel.deleteOne({ email: email });
        } catch (error) {
            console.log(`Error deleting user: ${email}.`, error);
            return false;
        }
        return true;
    }
}
