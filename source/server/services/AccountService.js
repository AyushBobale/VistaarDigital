import { AccountModel } from "../src/models/AccountModel.js";
import { TransactionModel } from "../src/models/TransactionModel.js";

const getAllAccountsService = async () => {
  return await AccountModel.find({});
};

const accountWithTransLessThanService = async (amount) => {
  const accounts = await TransactionModel.aggregate([
    {
      $unwind: "$transactions",
    },
    {
      $match: {
        "transactions.amount": { $lt: amount },
      },
    },
    {
      $group: {
        _id: "$account_id",
      },
    },
    // this is just so it is formatted nicely
    {
      $project: {
        _id: 0,
        account_id: "$_id",
      },
    },
  ]);
  return accounts;
};

const allUniqueProductsService = async () => {
  const products = await AccountModel.aggregate([
    {
      $unwind: "$products",
    },
    {
      $group: {
        _id: "$products",
      },
    },
    {
      $project: {
        _id: 0,
        product: "$_id",
      },
    },
  ]);

  return products;
};

export {
  getAllAccountsService,
  accountWithTransLessThanService,
  allUniqueProductsService,
};
