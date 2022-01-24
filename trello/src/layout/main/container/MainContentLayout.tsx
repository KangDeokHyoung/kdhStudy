import React from "react";
import { Outlet } from "react-router-dom";
import "./MainContentLayout.scss";

const MainContentLayout = () => {
  return (
    <div className="main-content">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainContentLayout;
