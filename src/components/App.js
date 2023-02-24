import '../App.css';
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import './JobList';
import './FreelancerList';
import './CreateJob';
import './NavBar';

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/freelancers">
          <Freelancers />
        </Route>
        <Route path="/create-job">
          <CreateJob />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
