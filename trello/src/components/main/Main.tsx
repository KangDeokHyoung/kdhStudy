import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <div className="main-content-header">
        <div className="breadcrumb">
          <ol>
            <li>프로젝트</li>
            <li>workSpace1</li>
          </ol>
        </div>
      </div>
      <div className="main-content-body">바디</div>
    </>
  );
};

export default Main;
