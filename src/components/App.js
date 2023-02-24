import '../styling/App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import JobList from './JobList';
import FreelancerList from './FreelancerList';
import CreateJob from './CreateJob';
import NavBar from './NavBar';
import Home from './Home';

function App() {

  const [jobs, setJobs] = useState([]);
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/jobs")
      .then(r => r.json())
      .then(jobs => setJobs(jobs));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/freelancers")
      .then(r => r.json())
      .then(freelancers => setFreelancers(freelancers));
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route path="/jobs">
          <JobList jobs={jobs} />
        </Route>
        <Route path="/freelancers">
          <FreelancerList freelancers={freelancers} />
        </Route>
        <Route path="/create-job">
          <CreateJob />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <NavBar />
    </div>
  );
}

export default App;
