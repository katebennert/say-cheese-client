import '../styling/App.css';
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import JobList from './JobList';
import FreelancerList from './FreelancerList';
import CreateJob from './CreateJob';
import NavBar from './NavBar';
import Home from './Home';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path="/jobs">
          <JobList />
        </Route>
        <Route path="/freelancers">
          <FreelancerList />
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
