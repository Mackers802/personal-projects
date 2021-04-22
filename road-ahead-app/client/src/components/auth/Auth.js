import React, { useState, useContext } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { UserAuthContext } from "../../context/UserAuthProvider";
import "./authPage.css"
export const Auth = () => {

const { login, signup, authErrorReset, errMsg } =  useContext(UserAuthContext)

  const [toggle, setToggle] = useState(true);

  const toggleForm = () => {
    setToggle((prev) => !prev);
    authErrorReset()
  };

  const handleSignup = (credentials) => {
    signup(credentials);
  }

 const handleLogin = (credentials) => {
    login(credentials);
  }

  return (
    <div id="auth">
      {!toggle ? (
        <div id="login">
          <Login handleSubmit={handleLogin} errMsg={errMsg} />
          <button onClick={toggleForm} >Not yet a user</button>
        </div>
      ) : (
        <div id="signup">
          <Signup handleSubmit={handleSignup} errMsg={errMsg} />
          <button onClick={toggleForm}>Already a user</button>
        </div>
      )}
      <p style={{ color: "red" }}>{errMsg}</p>
    </div>
  );
};
