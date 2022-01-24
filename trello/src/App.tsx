import React from "react";
// import Modal from "./components/ui/modal/Modal";
// import ModalContents from "./components/ui/modal/ModalContents";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import MainLayout from "./layout/main/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainLayout />}>
          <Route path="/main/workspace" element={<MainPage />} />
          {/* <Route path="/main/test1" /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    // <Modal
    //   content={({ closeHandler }: any) => {
    //     return <ModalContents closeHandler={closeHandler} />;
    //   }}
    // >
    //   <div className="modal-button">모달버튼</div>
    // </Modal>
  );
};

export default App;
