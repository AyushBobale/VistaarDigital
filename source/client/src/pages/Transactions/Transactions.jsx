import "./Transactions.css";
import "../ActiveCustomer/ActiveCustomer.css";

import React from "react";
import { useAccountTransactionsQuery } from "../../redux/slices/rootApi";
import { useParams } from "react-router";

const Transactions = () => {
  const { account_id } = useParams();
  const transtactions = useAccountTransactionsQuery(account_id);
  return (
    <div className="trans-wrap">
      <div className="trans">
        <h2>Transactions for account {account_id}</h2>
      </div>
      <div className="cust-table">
        <div className="cust-row-head">
          <p>Date</p>
          <p>Amount</p>
          <p>Code</p>
          <p>Symbol</p>
          <p>Price</p>
          <p>Total</p>
        </div>
        {transtactions.isSuccess &&
          transtactions?.data?.data?.transactions?.transactions?.map(
            (elm, idx) => {
              return (
                <div className="cust-row">
                  <p>{new Date(elm?.date).toDateString()}</p>
                  <p>{elm?.amount}</p>
                  <p>{elm?.transaction_code}</p>
                  <p>{elm?.symbol}</p>
                  <p>{Number(elm?.price?.$numberDecimal)}</p>
                  <p>{Number(elm?.total?.$numberDecimal)}</p>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Transactions;
