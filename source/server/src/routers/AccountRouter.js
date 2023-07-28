import {
  accountWithTransLessThanController,
  getAllAccountController,
  getAllUniqueProductsController,
} from "../controllers/AccountController.js";

import Router from "express";

const AccountRouter = Router();

AccountRouter.get("/", getAllAccountController);
AccountRouter.get("/less_than", accountWithTransLessThanController);
AccountRouter.get("/unique_products", getAllUniqueProductsController);

export { AccountRouter };
