import { AccountModel } from "../src/models/AccountModel.js";

const getAllAccountsService = async () => {
  return await AccountModel.find({});
};

export { getAllAccountsService };
