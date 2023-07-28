import Router from "express";
import { getAllCustomerController } from "../controllers/CustomerController.js";

const CustomerRouter = Router();

CustomerRouter.get("/", getAllCustomerController);

export { CustomerRouter };
