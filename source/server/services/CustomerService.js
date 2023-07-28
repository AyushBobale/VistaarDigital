import { CustomerModel } from "../src/models/CustomerModel.js";

const getAllCustomersService = async () => {
  const customer = await CustomerModel.find({}).lean();
  return customer;
};

export { getAllCustomersService };
