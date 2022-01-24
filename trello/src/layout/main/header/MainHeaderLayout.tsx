import React from "react";
import "./MainHeaderLayout.scss";

const MainHeaderLayout = () => {
  return (
    <section className="main-header">
      <div className="header-logo">
        <div className="logo" />
      </div>
      <div className="header-contents">
        <div className="header-contents-title">
          <h3>WorkSpace1</h3>
        </div>
        <div className="">
          <div className="header-contents">
            <div className="header-input">
              <input />
              <i className="serch-info" />
            </div>
            <div className="header-logout">
              <i className="logout-info" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeaderLayout;
