import React, { useState } from 'react'

export const Login = (props) => {

    const initInputs = {
        username: "",
        password: "",
        errMsg: ""
    }

    const [inputs, setInputs ] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
          ...prevInputs,
          [name]: value,
        }));
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(inputs) 
    }

    const handleLogin = (e) => {
   }



    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
        <br></br>
        <h1>Please login</h1>
        <br></br>
        <br></br>
          <h1>Username:</h1>
          <input type="text" name="username" placeholder="username"/>
          <h1>Password:</h1>
          <input type="password" name="password" placeholder="password"/>
        </label>
        <br></br>
        <button onClick={handleLogin} className="button"> Login </button>
      </form>
    )
}
