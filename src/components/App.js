import '../styling/App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import JobList from './JobList';
import FreelancerList from './FreelancerList';
import CreateJob from './CreateJob';
import NavBar from './NavBar';
import Home from './Home';
import JobPage from './JobPage';

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

  function handleDeleteJob(id) {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  }

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path="/jobs">
          <JobList jobs={jobs} />
        </Route>
        <Route path="/jobs/:id">
          <JobPage onJobDelete={handleDeleteJob}/>
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
    </div>
  );
}

export default App;
