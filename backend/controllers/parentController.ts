import { Request, Response } from 'express';
import { fetchParent, fetchParentByStudentNumber, fetchParents, createParent, updateParent, deleteAllParents, deleteParent, deleteParentByStudentNumber} from '../services/parentService';

export async function getParentsAPI(req: Request, res: Response) {
    try {
        const parents = await fetchParents();
        res.status(200).send({
            success: "true",
            message: "Parents fetched",
            data: parents
        });
    } catch (error) {
        console.error("Error fetching parents: ", error);
        res.status(400).send({
            success: "false",
            message: "Error fetching parents",
            log_error: error
        });
    }
}

export async function getParentAPI(req: Request, res: Response) {
    try {
        const { parentId } = req.body;
        const parent = await fetchParent(parentId);
        res.status(200).send({
            success: "true",
            message: "Parent fetched",
            data: parent
        });
    } catch (error) {
        console.error("Error fetching parent: ", error);
        res.status(400).send({
            success: "false",
            message: "Error fetching parent",
            log_error: error
        });
    }
}

export async function getParentByStudentNumberAPI(req: Request, res: Response) {
    try {
        const { studentNumber } = req.body;
        const parents = await fetchParentByStudentNumber(studentNumber);
        res.status(200).send({
            success: "true",
            message: "Parents fetched",
            data: parents
        });
    } catch (error) {
        console.error("Error fetching parents: ", error);
        res.status(400).send({
            success: "false",
            message: "Error fetching parents",
            log_error: error
        });
    }
}

export async function createParentAPI(req: Request, res: Response) {
    try {
        //userId should be received after creating user. 
        const { userId, firstName, middleName, lastName, contactNumber, email, address} = req.body;
        if (!userId || !firstName || !lastName || !contactNumber || !email || !address) {
            res.status(400).send({
                success: "false",
                message: "Missing required fields"
            });
        }
        const parent = {
            userId,
            firstName,
            middleName,
            lastName,
            contactNumber,
            email,
            address
        };
        const newParent = await createParent(parent);
        res.status(200).send({
            success: "true",
            message: "Parent created",
            data: newParent
        });
    } catch (error) {
        console.error("Error creating parent: ", error);
        res.status(400).send({
            success: "false",
            message: "Error creating parent",
            log_error: error
        });
    }
}

export async function updateParentAPI(req: Request, res: Response) {
    try {
        const { parentId, userId, firstName, middleName, lastName, contactNumber, email, address } = req.body;
        const oldParent = await fetchParent(parentId); 
        if (!oldParent) {
            res.status(400).send({
                success: "false",
                message: "Parent not found"
            });
        }
        
        const parentData = {
            userId: userId || oldParent.userId,
            firstName: firstName || oldParent.firstName,
            middleName: middleName || oldParent.middleName,
            lastName: lastName || oldParent.lastName,
            contactNumber: contactNumber || oldParent.contactNumber,
            email: email || oldParent.email,
            address: address || oldParent.address
        };

        const isUpdated = await updateParent(parentId, parentData);
        res.status(200).send({
            success: "true",
            message: isUpdated ? "Parent updated" : "Parent not updated"
        });
    } catch (error) {
        console.error("Error updating parent: ", error);
        res.status(400).send({
            success: "false",
            message: "Error updating parent",
            log_error: error
        });
    }
}

export async function deleteParentAPI(req: Request, res: Response) {
    try {
        const { parentId } = req.body;
        const isDeleted = await deleteParent(parentId);
        res.status(200).send({
            success: "true",
            message: isDeleted ? "Parent deleted" : "Parent not deleted"
        });
    } catch (error) {
        console.error("Error deleting parent: ", error);
        res.status(400).send({
            success: "false",
            message: "Error deleting parent",
            log_error: error
        });
    }
}

export async function deleteAllParentsAPI(req: Request, res: Response) {
    try {
        const isDeleted = await deleteAllParents();
        res.status(200).send({
            success: "true",
            message: isDeleted ? "All parents deleted" : "No parents deleted"
        });
    } catch (error) {
        console.error("Error deleting all parents: ", error);
        res.status(400).send({
            success: "false",
            message: "Error deleting all parents",
            log_error: error
        });
    }
}

export async function deleteParentByStudentNumberAPI(req: Request, res: Response) {
    try {
        const { studentNumber } = req.body;
        const isDeleted = await deleteParentByStudentNumber(studentNumber);
        res.status(200).send({
            success: "true",
            message: isDeleted ? "Parent deleted" : "Parent not deleted"
        });
    } catch (error) {
        console.error("Error deleting parent: ", error);
        res.status(400).send({
            success: "false",
            message: "Error deleting parent",
            log_error: error
        });
    }
}