import React, { useState, useContext } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { UserAuthContext } from "../../context/UserAuthProvider";

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
    <>
      {!toggle ? (
        <div>
          <Login handleSubmit={handleLogin} errMsg={errMsg} />
          <button onClick={toggleForm} >Not yet a user</button>
          <h1>
          </h1>
        </div>
      ) : (
        <div>
          <Signup handleSubmit={handleSignup} errMsg={errMsg} />
          <button onClick={toggleForm}>Already a user</button>
          <h1>
          </h1>
        </div>
      )}
      <p style={{ color: "red" }}>{errMsg}</p>
    </>
  );
};
