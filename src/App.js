import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import { Home } from "./components/Home/Home";
import { Information } from "./components/Information/Information";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
function App() {
  return (
    <Fragment>
       <Navbar/>
      <div className="container pt-4 text-center">
       <Switch>
         <Route exact path='/'  component={Home}/>
         <Route path='/information' component={Information}/>
         <Route path='/profile' component={Profile}/>
         <Route/>
       </Switch>
      </div>
    </Fragment>
  );
}

export default App;
