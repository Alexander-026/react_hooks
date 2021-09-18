import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import { Alert } from "./components/Alert/Alert";
import { Home } from "./components/Home/Home";
import { Information } from "./components/Information/Information";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import {AlertState} from './context/alert/alertState.js'

function App() {
  return (
    <AlertState>
      <Fragment>
        <Navbar />
        <div className="container pt-4">
          <Alert alert={{ text: "test Alert" }} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/information" component={Information} />
            <Route path="/profile" component={Profile} />
            <Route />
          </Switch>
        </div>
      </Fragment>
    </AlertState>
  );
}

export default App;
