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

  const [freelancers, setFreelancers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/freelancers")
      .then(r => r.json())
      .then(freelancers => {
        setFreelancers(freelancers)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/jobs")
      .then(r => r.json())
      .then(jobData => setJobs(jobData));
    }, []);

    function handleUpdateFreelancer(updatedFreelancer) {
    const updatedFreelancers = freelancers.map((freelancer) => {
      if (freelancer.id === updatedFreelancer.id) {
        return updatedFreelancer;
      } else {
        return freelancer;
      }
    });
    setFreelancers(updatedFreelancers);
  }

  function handleDeleteJob(deletedJob) {
    setJobs(jobs.filter(job => job.id === deletedJob.id));
  }

  function handleUpdateJob(updatedJob) {
      const updatedJobs = jobs.map((job) => {
        if (job.id === updatedJob.id) {
          return updatedJob;
        } else {
          return job;
        }
      });
      setJobs(updatedJobs);
  }

  const availableFreelancers = freelancers.filter(freelancer => freelancer.is_available);

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path="/jobs">
          <JobList jobs={jobs}/>
        </Route>
        <Route path="/jobs/:id">
          <JobPage freelancers={freelancers} jobs={jobs} availableFreelancers={availableFreelancers} onDeleteJob={handleDeleteJob} onUpdateFreelancer={handleUpdateFreelancer} onUpdateJob={handleUpdateJob}/>
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
