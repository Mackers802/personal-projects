import React, { useContext } from "react"
import { Switch, Route } from "react-router-dom"
import './App.css';
import { Auth } from "./components/auth/Auth"
import { Profile } from "./components/profile/Profile"
import { ChargingStations } from "./components/chargingStations/ChargingStations"
import { Directions } from "./components/directions/Directions"
import { GasStations } from "./components/gasStations/GasStations"
import { Hotels } from "./components/hotels/Hotels"
import { Recreation } from "./components/recreation/Recreation"
import { Resturants } from "./components/resturants/Resturants"
import { Weather } from "./components/weather/Weather"
import { UserAuthContext } from "./context/UserAuthProvider";

function App() {

const { token } = useContext(UserAuthContext)

  return (
    <div id="app">
      <Switch >
        <Route exact path="/Profile">
          { token ? <Profile /> : <Auth /> }
        </Route>
        <Route exact path="/ChargingStations">
          { token ? <ChargingStations /> : <Auth /> }
        </Route>
        <Route exact path="/Directions">
          { token ? <Directions /> : <Auth /> }
        </Route>
        <Route exact path="/GasStations">
          { token ? <GasStations /> : <Auth /> }
        </Route>
        <Route exact path="/Hotels">
          { token ? <Hotels /> : <Auth /> }
        </Route>
        <Route exact path="/Recreation">
          { token ? <Recreation /> : <Auth /> }
        </Route>
        <Route exact path="/Resturants">
          { token ? <Resturants /> : <Auth /> }
        </Route>
        <Route exact path="/Weather">
          { token ? <Weather /> : <Auth /> }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
