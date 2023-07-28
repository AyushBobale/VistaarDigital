import { getAllTransactionsService } from "../../services/TransactionService.js";

const getAllTransactionController = async (req, res, next) => {
  try {
    const transactions = await getAllTransactionsService();
    if (transactions) {
      return res.status(200).json({
        success: true,
        message: "Found transactions",
        data: { transactions },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not find transactions",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export { getAllTransactionController };
