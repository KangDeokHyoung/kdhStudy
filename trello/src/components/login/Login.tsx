import React, { useState } from "react";
import { Input, Button } from "common/components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { onSignIn } from "store/slice/LoginSlice";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selecteds = useSelector((state: RootState) => state.login);

  const IdHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setId(e.target.value);
  };
  const PassWordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHRsyDIMs2B8xNdsXxhnp1kaBs-RFPFkU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHRsyDIMs2B8xNdsXxhnp1kaBs-RFPFkU";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: Id,
        password: Password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(onSignIn(data.idToken));
        if (isLogin) navigate("/main/workspace");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <Input id="id" label="id" type="text" onChange={IdHandler} value={Id} />
        <Input
          id="password"
          label="password"
          type="text"
          onChange={PassWordHandler}
          value={Password}
        />
        <Button type="submit">{!isLoading ? "Login" : "Create Account"}</Button>

        {isLoading && <p>요청을 보내는중...</p>}
        <button onClick={switchAuthModeHandler} type="button">
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </form>
    </>
  );
};

export default Login;
