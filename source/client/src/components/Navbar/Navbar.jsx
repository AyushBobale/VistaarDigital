import "./Navbar.css";

import { Link } from "react-router-dom";
import { ROUTES } from "../../config";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <h1>Navbar</h1>
      </div>
      <div className="right">
        <Link to={ROUTES.ROOT}>Home</Link>
        <Link to={ROUTES.ACTIVE}>Que 1</Link>
        <Link to={ROUTES.ACCOUNT_TRANSACTIONS("371138")}>Que 2</Link>
        <Link to={ROUTES.ACCOUNT_TRANS_LESS_THAN(5000)}>Que 3</Link>
        <Link to={ROUTES.DISTINCT_PRODUCTS}>Que 4</Link>
      </div>
    </nav>
  );
};

export default Navbar;
