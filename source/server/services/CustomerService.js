import { CustomerModel } from "../src/models/CustomerModel.js";

const getAllCustomersService = async () => {
  return await CustomerModel.find({});
};

export { getAllCustomersService };
