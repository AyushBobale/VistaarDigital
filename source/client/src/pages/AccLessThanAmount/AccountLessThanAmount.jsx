import "./AccountLessThanAmount.css";
import "../ActiveCustomer/ActiveCustomer.css";

import {
  useAccountTransLessThanAmountQuery,
  useAccountTransLessThanQuery,
} from "../../redux/slices/rootApi";

import React from "react";
import { useParams } from "react-router";

const AccountLessThanAmount = () => {
  const { amount } = useParams();
  const accL = useAccountTransLessThanAmountQuery(amount);

  return (
    <div className="acc-l-wrap">
      <div className="acc-l">
        <h2>
          Account with atleast one transaction with less than {amount} amount
        </h2>
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
