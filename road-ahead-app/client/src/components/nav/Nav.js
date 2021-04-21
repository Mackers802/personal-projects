import React, { useContext } from 'react'
import { Link } from "react-router-dom"

import { UserAuthContext } from "../../context/UserAuthProvider"

export const Nav = () =>{

    const { logout } = useContext(UserAuthContext)

    return (
        <div>
            <Link to="/Feed">Feed</Link>
            <Link to="/Profile">Profile</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

