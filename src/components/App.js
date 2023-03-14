import '../styling/App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import JobList from './JobList';
import FreelancerList from './FreelancerList';
import CreateJob from './CreateJob';
import CreateFreelancer from './CreateFreelancer';
import NavBar from './NavBar';
import Home from './Home';
import JobPage from './JobPage';

function App() {

  const [freelancers, setFreelancers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [availableFreelancers, setAvailableFreelancers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/freelancers")
      .then(r => r.json())
      .then(freelancers => {
        setFreelancers(freelancers);
        setAvailableFreelancers(freelancers.filter(freelancer => freelancer.is_available));
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/jobs")
      .then(r => r.json())
      .then(jobData => setJobs(jobData));
    }, []);

    function dateToString(date) {
      let d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;

      return [year, month, day].join('-');
  }

  function handleUpdateFreelancer(updatedFreelancer) {

    const updatedFreelancers = freelancers.map(freelancer => {
      if (freelancer.id === updatedFreelancer.id) {
        return updatedFreelancer;
      } else {
        return freelancer
      }
    })
      setFreelancers(updatedFreelancers);
      setAvailableFreelancers(updatedFreelancers.filter(freelancer => freelancer.is_available));
  }

  function handleUpdateFreelancerAfterDelete(freelancersToUpdate) {
    setAvailableFreelancers([...availableFreelancers, ...freelancersToUpdate]);
  }

  function handleDeleteJob(deletedJob) {
    setJobs(jobs.filter(job => job.id !== deletedJob.id));
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

  function handleCreateNewJob(newJob) {
    setJobs([...jobs, newJob]);
  }

  function handleCreateNewFreelancer(newFreelancer) {
    setFreelancers([...freelancers, newFreelancer]);
    setAvailableFreelancers([...freelancers, newFreelancer].filter(freelancer => freelancer.is_available));
  }

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path="/jobs">
          <JobList jobs={jobs} dateToString={dateToString}/>
        </Route>
        <Route path="/jobs/:id">
          <JobPage freelancers={freelancers} jobs={jobs} availableFreelancers={availableFreelancers} onDeleteJob={handleDeleteJob} onUpdateFreelancer={handleUpdateFreelancer} onUpdateFreelancerAfterDelete={handleUpdateFreelancerAfterDelete} onUpdateJob={handleUpdateJob} dateToString={dateToString}/>
        </Route>
        <Route path="/freelancers">
          <FreelancerList freelancers={freelancers} availableFreelancers={availableFreelancers}/>
        </Route>
        <Route path="/create-job">
          <CreateJob onCreateNewJob={handleCreateNewJob} />
        </Route>
        <Route path="/create-freelancer">
          <CreateFreelancer onCreateNewFreelancer={handleCreateNewFreelancer} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
