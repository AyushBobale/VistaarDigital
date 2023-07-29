import {
  accountWithTransLessThanService,
  allUniqueProductsService,
  getAllAccountsService,
} from "../../services/AccountService.js";

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

const accountWithTransLessThanController = async (req, res, next) => {
  try {
    let amount = 5000; // Amount here is hardcoded as there was no mention to have dynamic query
    if (parseInt(req.params.amount)) amount = parseInt(req.params.amount);
    const accounts = await accountWithTransLessThanService(amount);
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

const getAllUniqueProductsController = async (req, res, next) => {
  try {
    const products = await allUniqueProductsService();
    if (products) {
      return res.status(200).json({
        success: true,
        message: "Found products",
        data: { products },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not find products",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export {
  getAllAccountController,
  accountWithTransLessThanController,
  getAllUniqueProductsController,
};
