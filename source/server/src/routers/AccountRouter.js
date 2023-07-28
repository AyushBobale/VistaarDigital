import Router from "express";
import { getAllAccountController } from "../controllers/AccountController.js";

const AccountRouter = Router();

AccountRouter.get("/", getAllAccountController);

export { AccountRouter };
