import { ITransaction } from "../models/database/transactionSchema";
import { TransactionModel } from "../models/transactionModel";

const transactionModel = new TransactionModel();

export async function addTransaction(transactionData: ITransaction): Promise<ITransaction> {
    return await transactionModel.createTransaction(transactionData);
}

export async function getAllTransactions(): Promise<ITransaction[] | boolean> {
    const transactionsQuery = await transactionModel.getTransactions();
    if (!transactionsQuery) {
        return false;
    }
    return transactionsQuery;
}

export async function getTransaction(transactionId: string): Promise<ITransaction> {
    return await transactionModel.getTransaction(transactionId);
}

export async function removeTransaction(transactionId: string): Promise<boolean> {
    return await transactionModel.deleteTransaction(transactionId);
}

export async function removeAllTransactions(): Promise<boolean> {
    return await transactionModel.deleteAllTransactions();
}

export async function updateTransaction(transactionId: string, transactionData: ITransaction): Promise<boolean> {
    return await transactionModel.updateTransaction(transactionId, transactionData);
}

