import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";

const Pagelayout = () => {
  return (
    <>
      {/* <Nav/> */}
      <Outlet />
    </>
  );
};

export default Pagelayout;
