import React from 'react'
import { Link } from "react-router-dom"
import "./dropNav.css"
// import { CharginStations } from "./components/chargingStations/ChargingStations"
// import { Directions } from "./components/directions/Directions"
// import { GasStations } from "./components/gasStations/GasStations"
// import { Hotels } from "./components/hotels/Hotels"
// import { Recreation } from "./components/recreation/Recreation"
// import { Resturants } from "./components/resturants/Resturants"
// import { Weather } from "./components/weather/Weather"
// import { Profile } from "../../components/profile/Profile"
// import { UserAuthContext } from "./context/UserAuthProvider";

export const DropNav = () =>{

    // const { logout } = useContext(UserAuthContext)

    return (
        <div id="dropNav">
             <Link to="/Directions">Directions</Link>
             <Link to="/Weather">Weather</Link>
             <Link to="/GasStations">Gas Stations</Link>
             <Link to="/ChargingStations">Charging Stations</Link>
             <Link to="/Resturants">Resturants</Link>
             <Link to="/Hotels">Hotels</Link>
             <Link to="/Recreation">Recreation</Link>
        </div>
    )
}

