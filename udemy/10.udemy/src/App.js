import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const data = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!data.isLoggedIn && <Login />}
        {data.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
