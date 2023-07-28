import {
  getActiveCustomerController,
  getAllCustomerController,
} from "../controllers/CustomerController.js";

import Router from "express";

const CustomerRouter = Router();

CustomerRouter.get("/", getAllCustomerController);
CustomerRouter.get("/active", getActiveCustomerController);

export { CustomerRouter };
