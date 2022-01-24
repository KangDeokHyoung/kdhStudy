import React from "react";
import "./MainSideBarLayout.scss";

const MainSideBarLayout = () => {
  return (
    <div className="main-sidebar">
      <div className="sidebar-uitls">
        <div className="main-sidebar-profile">
          <div className="main-sidebar-profile-container">
            <div>
              <div className="profile-img" />
              <div className="profile-name">
                <span className="title-bold">Hello</span>, Deok Hyuoung
              </div>
            </div>
          </div>
        </div>
        <div className="main-sidebar-list-container">
          <div className="main-sidebar-list-title">
            <h5>Your Boards</h5>
            <i className="list-title-info" />
          </div>
          <div className="main-sidebar-list">
            <ul className="sidebar-list-items">
              <li>
                <div className="list-items-title">WorkSpace1</div>
                <i className="sidebar-list-items-info" />
              </li>
              <li>
                <div className="list-items-title">WorkSpace2</div>
                <i className="sidebar-list-items-info" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSideBarLayout;
