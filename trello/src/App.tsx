import React from "react";
// import Modal from "./components/ui/modal/Modal";
// import ModalContents from "./components/ui/modal/ModalContents";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import MainLayout from "./layout/main/MainLayout";

const AuthElement = ({ children }: any) => {
  const tokens = localStorage.getItem("token");
  return tokens ? children : <Navigate to="/" />;
};

const LoginElement = ({ children }: any) => {
  const tokens = localStorage.getItem("token");
  return !tokens ? children : <Navigate to="/main/workspace" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginElement>
              <LoginPage />
            </LoginElement>
          }
        />
        <Route
          path="/main"
          element={
            <AuthElement>
              <MainLayout />
            </AuthElement>
          }
        >
          <Route path="/main/workspace" element={<MainPage />} />
          {/* <Route path="/main/workspace/test1" /> */}
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
