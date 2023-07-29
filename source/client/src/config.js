export const BASE_URL = "https://vistaar-digital-api.onrender.com";
export const ROUTES = {
  ROOT: "/",
  ACTIVE: "/active_cust",
  ACCOUNT_TRANSACTIONS: (id) => `/transaction/${id}`,
  ACCOUNT_TRANS_BELOW_5000: "/acc_trans_less_5000",
  ACCOUNT_TRANS_LESS_THAN: (amount) => `/acc_trans_less/${amount}`,
  DISTINCT_PRODUCTS: "/distinct_products",
};
