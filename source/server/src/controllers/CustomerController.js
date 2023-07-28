import {
  getActiveCustomerService,
  getAllCustomersService,
} from "../../services/CustomerService.js";

const getAllCustomerController = async (req, res, next) => {
  try {
    const customers = await getAllCustomersService();
    if (customers) {
      return res.status(200).json({
        success: true,
        message: "Found customers",
        data: { customers },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not find customers",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

const getActiveCustomerController = async (req, res, next) => {
  try {
    const customers = await getActiveCustomerService();
    if (customers) {
      return res.status(200).json({
        success: true,
        message: "Found active customers",
        data: { customers },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not find active customers",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export { getAllCustomerController, getActiveCustomerController };
