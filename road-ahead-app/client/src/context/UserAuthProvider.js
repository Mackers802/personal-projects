import React, { useState } from 'react'
import axios from 'axios'

export const UserAuthContext = React.createContext()

export const UserAuthProvider = (props) => {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        errMsg: "",
      };

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios
            .post("/auth/signup", credentials)
            .then((res) => {
                const { user, token } = res.data
                localStorage.setItem("token", token );
                localStorage.setItem("user", JSON.stringify(user))
                setUserState((prevUserState) => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch((err) => handleAuthError(err.response.data.errMsg)) 
    }

    function login(credentials){
        axios
            .post("/auth/login", credentials)
            .then((res) => {
                const { user, token } = res.data
                localStorage.setItem("token", token );
                localStorage.setItem("user", JSON.stringify(user))
                setUserState((prevUserState) => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch((err) => handleAuthError(err.response.data.errMsg)) 
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUserState({
          user: {},
          token: "",
        });
      }

    function handleAuthError(errMsg) {
        setUserState((prevState) => ({
          ...prevState,
          errMsg,
        }));
      }
    
      function authErrorReset() {
        setUserState((prevState) => ({
          ...prevState,
          errMsg: "",
        }));
      }
    return (




        <div>
            <UserAuthContext.Provider value={{
                ...userState,
                signup,
                login,
                logout,
                handleAuthError,
                authErrorReset

            }}>
                {props.children}
            </UserAuthContext.Provider>
        </div>
    )
}
