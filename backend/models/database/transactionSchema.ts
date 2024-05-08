import { Schema, Types } from 'mongoose';

export enum TransactionType {
    OUTGOING = 'OUTGOING',
    INCOMING = 'INCOMING'
}
export interface ITransaction {
    _id: Types.ObjectId,
    to: string,
    from: string,
    amount: number, //in php
    transactionDate: Date,
    transactionType: TransactionType,
    transactionDescription: string,
    misc?: string // prolly image link of receipt
}

export const transactionSchema = new Schema<ITransaction>({
    to: { type: String, required: true },
    from: { type: String, required: true },
    amount: { type: Number, required: true },
    transactionDate: { type: Date, required: true },
    transactionType: { type: String, required: true, default: TransactionType.OUTGOING },
    transactionDescription: { type: String, required: true },
    misc: { type: String, default: null }
});