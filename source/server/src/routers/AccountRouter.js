import {
  accountWithTransLessThanController,
  getAllAccountController,
  getAllUniqueProductsController,
} from "../controllers/AccountController.js";

import Router from "express";

const AccountRouter = Router();

AccountRouter.get("/", getAllAccountController);
// these 2 do the same thing just that the first link has hard coded amount
AccountRouter.get("/less_than", accountWithTransLessThanController);
AccountRouter.get("/less_than/:amount", accountWithTransLessThanController);
AccountRouter.get("/unique_products", getAllUniqueProductsController);

export { AccountRouter };
