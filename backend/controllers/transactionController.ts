import { Request, Response } from 'express';
import { addTransaction, getAllTransactions, getTransaction, removeAllTransactions, removeTransaction, updateTransaction } from '../services/transactionService';
import { ITransaction } from '../models/database/transactionSchema';

export async function addTransactionAPI(req: Request, res: Response) {
    try {
        const transactionData = req.body;

        const success = await addTransaction(transactionData);
        if (!success) {
            res.status(400).send({
                success: "false",
                message: 'Transaction not added'});
            return;
        }

        res.status(201).send({
            success: "true",
            message:'Transaction added',
            data: success});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error adding transaction',
            log_error: error});
    }
}

export async function getAllTransactionsAPI(req: Request, res: Response) {
    try {
        const transactions = await getAllTransactions();
        if (!transactions) {
            res.status(400).send({
                success: "false",
                message: 'Transactions not found'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Transactions found',
            data: transactions});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching transactions',
            log_error: error});
    }
}

export async function getTransactionAPI(req: Request, res: Response) {
    try {
        const { id } = req.body;
        if (!id) {
            res.status(400).send({
                success: "false",
                message: 'Transaction ID not provided'});
            return;
        }
        const transaction = await getTransaction(id);
        if (!transaction) {
            res.status(400).send({
                success: "false",
                message: 'Transaction not found'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Transaction found',
            data: transaction});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error fetching transaction',
            log_error: error});
    }
}

export async function removeTransactionAPI(req: Request, res: Response) {
    try {
        const { id } = req.body;
        if (!id) {
            res.status(400).send({
                success: "false",
                message: 'Transaction ID not provided'});
            return;
        }

        const isDeleted = await removeTransaction(id);
        if (!isDeleted) {
            res.status(400).send({
                success: "false",
                message: 'Transaction not deleted'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Transaction deleted'});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error deleting transaction',
            log_error: error});
    }
}

export async function removeAllTransactionsAPI(req: Request, res: Response) {
    try {
        const isDeleted = await removeAllTransactions();
        if (!isDeleted) {
            res.status(400).send({
                success: "false",
                message: 'Transactions not deleted'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Transactions deleted'});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error deleting transactions',
            log_error: error});
    }
}

export async function updateTransactionAPI(req: Request, res: Response) {
    try {
        const { id, to, from, amount, transactionDate, transactionType, misc } = req.body;
        if (!id) {
            res.status(400).send({
                success: "false",
                message: 'Transaction ID not provided'});
            return;
        }
        const oldTransaction = await getTransaction(id);
        if (!oldTransaction) {
            res.status(400).send({
                success: "false",
                message: 'Transaction not found'});
            return;
        }

        const transaction: ITransaction = {
            to: to || oldTransaction.to,
            from: from || oldTransaction.from,
            amount: amount || oldTransaction.amount,
            transactionDate: transactionDate || oldTransaction.transactionDate,
            transactionType: transactionType || oldTransaction.transactionType,
            transactionDescription: req.body.transactionDescription || oldTransaction.transactionDescription,
            misc: misc || oldTransaction.misc
        }

        const isUpdated = await updateTransaction(id, transaction);
        if (!isUpdated) {
            res.status(400).send({
                success: "false",
                message: 'Transaction not updated'});
            return;
        }

        res.status(200).send({
            success: "true",
            message: 'Transaction updated'});
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: 'Error updating transaction',
            log_error: error});
    }
}