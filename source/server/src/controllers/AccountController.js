import { getAllAccountsService } from "../../services/AccountService.js";

const getAllAccountController = async (req, res, next) => {
  try {
    const accounts = await getAllAccountsService();
    if (accounts) {
      return res.status(200).json({
        success: true,
        message: "Found accounts",
        data: { accounts },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not find accounts",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export { getAllAccountController };
