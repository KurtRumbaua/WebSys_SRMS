import { ITransaction } from "./database/transactionSchema";
import { db } from "./database/mongodbConfig";

export class TransactionModel{
    // get
    async getTransactions(): Promise<ITransaction[]> {
        return await db.TransactionModel.find();
    }

    async getTransaction(transactionId: string): Promise<ITransaction> {
        const transactionData = await db.TransactionModel.findOne({ _id: transactionId });
        if (!transactionData) {
            throw new Error(`getTransaction: transaction ${transactionId} not found`);
        }
        return transactionData;
    }

    // create
    async createTransaction(transaction: ITransaction): Promise<ITransaction> {
        const newTransaction = new db.TransactionModel(transaction);
        return await newTransaction.save();
    }

    // update
    async updateTransaction(transactionId: string, transaction: ITransaction): Promise<boolean> {
        try {
            const isSuccess = await db.TransactionModel.updateOne({ _id: transactionId }, transaction);
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error updating transaction: ${transactionId}-${transaction}`, error);
            return false;
        }
    }

    // maybe a transaction has a status?

    // delete
    async deleteTransaction(transactionId: string): Promise<boolean> {
        try {
            const isSuccess = await db.TransactionModel.deleteOne({ _id: transactionId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting transaction: ${transactionId}.`, error);
            return false;
        }
    }

    async deleteAllTransactions(): Promise<boolean> {
        try {
            const isSuccess = await db.TransactionModel.deleteMany({});
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting all transactions.`, error);
            return false;
        }
    }
    
}