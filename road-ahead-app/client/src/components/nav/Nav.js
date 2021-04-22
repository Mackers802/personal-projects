import React, { useContext } from 'react'
import "./nav.css"
import { Link } from "react-router-dom"
import { DropNav } from "./DropNav.js"

import { UserAuthContext } from "../../context/UserAuthProvider"

export const Nav = () =>{

    const { logout } = useContext(UserAuthContext)

    return (
        <div id="navContainer">
            <div id="dropNav">
                <DropNav />
            </div>
            <div id="nav">
            <Link to="/Profile">Profile</Link>
            <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

