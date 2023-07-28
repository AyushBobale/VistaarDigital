import React from "react";
import { useServerCheckQuery } from "../../redux/slices/rootApi";

export const Home = () => {
  const serverCheck = useServerCheckQuery();
  console.log(serverCheck);
  return <div>Home</div>;
};
