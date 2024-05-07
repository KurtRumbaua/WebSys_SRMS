import { IUser, IEntity } from "./database/userSchema";
import { db } from './database/mongodbConfig';
import e from "express";

export class UserModel {
    async createUser(user: IUser): Promise<boolean> {
        const userExists = await db.UserModel.exists({ username: user.username });
        if (userExists) {
            return false;
        }

        const userData = new db.UserModel(user);
        try {
            console.log(`${userData}`);
            await userData.save();
        } catch (error) {
            console.log('Error creating user:', error);
            return false;
        }
        return true;
    }

    async readAllUsers(): Promise<IUser[]> {
        return await db.UserModel.find();
    }

    async readUser(userId: string): Promise<IUser> {
        const userData = await db.UserModel.findOne({ _id: userId });
        if (!userData) {
            throw new Error('readUser: user not found');
        }
        return userData;
    }

    async updateUser(oldData: IUser, newData: IUser): Promise<boolean> {
        try {
            await db.UserModel.updateOne({ _id: oldData._id }, newData);
            return true;
        } catch (error) {
            console.log('Error updating user:', error);
            return false;
        }
    }

    async deleteUser(userId: string): Promise<boolean> {
        try  {
            await db.UserModel.deleteOne({ _id: userId });
            return true;
        } catch (error) {
            console.log('Error deleting user:', error);
            return false;
        }
    }

    async createEntities(entity: IEntity): Promise<boolean> {
        const entityExists = await db.EntityModel.exists({ email: entity.email });
        if (entityExists) {
            return false;
        }

        const entityData = new db.EntityModel(entity);
        try {
            console.log(`${entityData}`);
            await entityData.save();
        } catch (error) {
            console.log('Error creating entity:', error);
            return false;
        }
        return true;
    }

    async readAllEntities(): Promise<IEntity[]> {
        return await db.EntityModel.find();
    }

    async readEntity(entityEmail: string): Promise<IEntity> {
        const userData = await db.EntityModel.findOne({ email: entityEmail });
        if (!userData) {
            throw new Error('readEntity: entity not found');
        }
        return userData;
    }

    async updateEntity(oldData: IEntity, newData: IEntity): Promise<boolean> {
        try {
            await db.EntityModel.updateOne({ _id: oldData._id }, newData);
            return true;
        } catch (error) {
            console.log('Error updating entity:', error);
            return false;
        }
    }

    async deleteEntity(entityEmail: string): Promise<boolean> {
        try  {
            await db.EntityModel.deleteOne({ email: entityEmail });
            return true;
        } catch (error) {
            console.log('Error deleting entity:', error);
            return false;
        }
    }
}
