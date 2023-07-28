import { TransactionModel } from "../src/models/TransactionModel,js";

const getAllTransactionsService = async () => {
  return await TransactionModel.find({});
};

export { getAllTransactionsService };
