import "./DistinctProducts.css";

import React from "react";
import { useUniqueProductsQuery } from "../../redux/slices/rootApi";

const DistinctProducts = () => {
  const distinctProducts = useUniqueProductsQuery();
  return (
    <div className="dist-wrap">
      <div className="dist">
        <h2>Distinct Products</h2>

        {distinctProducts.isSuccess &&
          distinctProducts.data?.data?.products?.map((elm, idx) => {
            return <p>{elm?.product}</p>;
          })}
      </div>
    </div>
  );
};

export default DistinctProducts;
