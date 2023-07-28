import {
  getAllTransactionController,
  getTransactionForAccountIdController,
} from "../controllers/TransactionController.js";

import Router from "express";

const TransactionRouter = Router();

TransactionRouter.get("/", getAllTransactionController);

// this should be always below other get routes
TransactionRouter.get("/:account_id", getTransactionForAccountIdController);

export { TransactionRouter };
