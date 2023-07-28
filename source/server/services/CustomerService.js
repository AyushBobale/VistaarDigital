import { CustomerModel } from "../src/models/CustomerModel.js";

const getAllCustomersService = async () => {
  return await CustomerModel.find({}).lean();
};

const getActiveCustomerService = async () => {
  const activeCustomer = await CustomerModel.find(
    { active: true },
    { name: 1, address: 1, accounts: 1 }
  ).lean();

  return activeCustomer;
};

export { getAllCustomersService, getActiveCustomerService };
