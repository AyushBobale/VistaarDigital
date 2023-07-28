import Navbar from "../../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import React from "react";

export const UserLayout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
