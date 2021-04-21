import React, { useContext } from "react"
import { Switch, Route } from "react-router-dom"
import './App.css';
import { Auth } from "./components/auth/Auth"
import { Feed } from "./components/feed/Feed"
import { Profile } from "./components/profile/Profile"
import { UserAuthContext } from "./context/UserAuthProvider";

function App() {

const { token } = useContext(UserAuthContext)

  return (
    <>
    <Switch >
      <Route exact path="/Profile">
        { token ? <Profile /> : <Auth /> }
      </Route>
      <Route exact path="/Feed">
        { token ? <Feed /> : <Auth /> }
      </Route>
    </Switch>
    </>
  );
}

export default App;
