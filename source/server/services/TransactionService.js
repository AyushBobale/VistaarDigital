import { TransactionModel } from "../src/models/TransactionModel.js";

const getAllTransactionsService = async () => {
  return await TransactionModel.find({});
};

const getTransactionForAccountIdService = async (accountId) => {
  return await TransactionModel.findOne({ account_id: accountId });
};

export { getAllTransactionsService, getTransactionForAccountIdService };
