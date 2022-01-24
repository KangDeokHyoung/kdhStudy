import React from "react";
import "./MainLayout.scss";
import MainHeaderLayout from "./header/MainHeaderLayout";
import MainSideBarLayout from "./container/MainSideBarLayout";
import MainContentLayout from "./container/MainContentLayout";

const MainLayout = () => {
  return (
    <div id="main-screen">
      <MainHeaderLayout />
      <section className="main-container-wrap">
        <MainSideBarLayout />
        <MainContentLayout />
      </section>
    </div>
  );
};

export default MainLayout;
