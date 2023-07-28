import "./ActiveCustomer.css";

import React, { useEffect, useState } from "react";
import {
  useActiveCustomersQuery,
  useAllCustomersQuery,
} from "../../redux/slices/rootApi";

import { Link } from "react-router-dom";
import { ROUTES } from "../../config";

const ActiveCustomer = () => {
  const activeCustomers = useActiveCustomersQuery();
  const allCustomers = useAllCustomersQuery();

  const [activeCust, setActiveCust] = useState(true);
  const handleRadioChange = (e) => {
    setActiveCust(e);
  };

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    if (activeCust && activeCustomers.isSuccess) {
      setCustomers(activeCustomers.data?.data?.customers || []);
    }

    if (!activeCust && allCustomers.isSuccess) {
      setCustomers(allCustomers.data?.data?.customers || []);
    }
  }, [activeCust, activeCustomers.isSuccess, allCustomers.isSuccess]);

  return (
    <div className="active-cust-wrap">
      <div className="active-cust">
        <h2>Active Customers</h2>
        <div className="choice">
          <span
            className={activeCust ? "underline" : ""}
            onClick={() => {
              handleRadioChange(true);
            }}
          >
            Active Customers
          </span>
          <span
            className={!activeCust ? "underline" : ""}
            onClick={() => {
              handleRadioChange(false);
            }}
          >
            All Customers
          </span>
        </div>
        <div className="cust-table">
          <div className="cust-row-head">
            <p>Name</p>
            <p>Address</p>
            <p>Accounts</p>
          </div>
          {customers?.map((elm, idx) => {
            return (
              <div className="cust-row">
                <p>{elm?.name}</p>
                <p>{elm?.address}</p>
                <div className="accounts">
                  {elm?.accounts?.map((acc, accIdx) => {
                    return (
                      <Link to={ROUTES.ACCOUNT_TRANSACTIONS(acc)}>{acc}</Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActiveCustomer;
