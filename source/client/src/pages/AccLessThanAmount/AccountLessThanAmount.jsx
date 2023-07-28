import "./AccountLessThanAmount.css";
import "../ActiveCustomer/ActiveCustomer.css";

import React from "react";
import { useAccountTransLessThanQuery } from "../../redux/slices/rootApi";

const AccountLessThanAmount = () => {
  const accL = useAccountTransLessThanQuery();

  return (
    <div className="acc-l-wrap">
      <div className="acc-l">
        <h2>Account with atleast one transaction with less than 5000 amount</h2>
        <div className="cust-table">
          <div className="cust-row-head">
            <p>Account</p>
          </div>
          {accL.isSuccess &&
            accL.data?.data?.accounts?.map((elm, idx) => {
              return (
                <div className="cust-row">
                  <p>{elm?.account_id}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AccountLessThanAmount;
