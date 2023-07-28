import "./Home.css";

import { Link } from "react-router-dom";
import React from "react";
import { useServerCheckQuery } from "../../redux/slices/rootApi";

export const Home = () => {
  const serverCheck = useServerCheckQuery();
  console.log(serverCheck);
  return (
    <div className="home-wrap">
      <h2>Home</h2>
      <Link to="https://github.com/AyushBobale/VistaarDigital">
        Project Link
      </Link>
    </div>
  );
};
