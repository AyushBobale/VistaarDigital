export const BASE_URL = "http://localhost:5000";
export const ROUTES = {
  ROOT: "/",
  ACTIVE: "/active_cust",
  ACCOUNT_TRANSACTIONS: (id) => `/transaction/${id}`,
  ACCOUNT_TRANS_BELOW_5000: "/acc_trans_less_5000",
  DISTINCT_PRODUCTS: "/distinct_products",
};
