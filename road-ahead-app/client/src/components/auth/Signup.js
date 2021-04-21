import React, { useState } from 'react'

export const Signup = (props) => {

    const initInputs = {
        username: "",
        password: "",
    };
    
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    }
    
    const [inputs, setInputs] = useState(initInputs);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(inputs);
      };


    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
        <h1>Create Username</h1>
        <input type="text" name="username" placeholder="username" />
        <h1>Create Password</h1>
          <input type="password" name="password" placeholder="password" />
        <h1>Email</h1>
        <input type="text" name="email" placeholder="Email"/>
        </label>
        <br></br>
        <br></br>
        <button className="button">Signup</button>
      </form>
    )
}
