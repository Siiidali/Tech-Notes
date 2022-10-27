import { Outlet } from "react-router-dom";
import DashFooter from "./DashFooter";
import DashHeader from "./DashHeader";
import React from "react";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};

export default DashLayout;
