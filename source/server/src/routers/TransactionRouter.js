import Router from "express";
import { getAllTransactionController } from "../controllers/TransactionController.js";

const TransactionRouter = Router();

TransactionRouter.get("/", getAllTransactionController);

export { TransactionRouter };
