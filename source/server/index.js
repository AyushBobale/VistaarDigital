import "dotenv/config";

import { AccountRouter } from "./src/routers/AccountRouter.js";
import { CustomerRouter } from "./src/routers/CustomerRouter.js";
import { TransactionRouter } from "./src/routers/TransactionRouter.js";
import connectDB from "./src/db/conn.js";
import cors from "cors";
import errorHandler from "./src/middlewares/errorHandlerMiddleware.js";
import express from "express";

const PORT = process.env.PORT || 5000;
connectDB();
//
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.CORS_DOMAIN, "http://192.168.1.5:3000"],
  })
);

// server status check
app.get("/", (req, res, next) => {
  res.send({
    status: "OK",
  });
});

// Routers
app.use("/customer", CustomerRouter);
app.use("/account", AccountRouter);
app.use("/transaction", TransactionRouter);

// error logging and handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
