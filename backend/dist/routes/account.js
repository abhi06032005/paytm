import express from 'express';
import mongoose from 'mongoose';
import db from '../db.js';
import authMiddleware from '../middleware.js';
const { Account } = db;
const account = express.Router();
account.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        const { amount, to } = req.body;
        //@ts-ignore
        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.accountBalance < amount) {
            await session.abortTransaction();
            res.status(400).json({
                message: "Insufficient Balance || no account found"
            });
            return;
        }
        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            res.status(400).json({
                message: "Sender Does not exist"
            });
            return;
        }
        //@ts-ignore
        await Account.updateOne({ userId: req.userId }, { $inc: { accountBalance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { accountBalance: amount } }).session(session);
        await session.commitTransaction();
        res.json({
            message: `Transaction of Rs.${amount} is successful`
        });
    }
    catch (error) {
        await session.abortTransaction();
        res.status(500).json({ message: "Transaction failed", error: error.message });
    }
    finally {
        session.endSession();
    }
});
account.get("/balance", authMiddleware, async (req, res) => {
    //@ts-ignore
    const user = req.userId;
    const userAccount = await Account.findOne({
        userId: user,
    });
    console.log(userAccount);
    if (userAccount) {
        const balance = userAccount.accountBalance;
        res.json({
            message: `your bakance is ${balance}`
        });
    }
});
export default account;
//# sourceMappingURL=account.js.map