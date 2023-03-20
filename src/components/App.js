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
  const [freelancersAvailable, setFreelancersAvailable] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/jobs")
      .then(r => r.json())
      .then(jobData => setJobs(jobData));
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:9292/freelancers")
      .then(r => r.json())
      .then(freelancerData => {
        setFreelancers(freelancerData);
        setFreelancersAvailable(freelancerData.filter(f => f.is_available));
      });
  }, []);

  const dateToString = (date) => {
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

  const handleUpdateFreelancer = (updatedFreelancer) => {

    const updatedFreelancers = freelancers.map(freelancer => {
      if (freelancer.id === updatedFreelancer.id) {
        return updatedFreelancer;
      } else {
        return freelancer
      }
    })
      setFreelancers(updatedFreelancers);
      setFreelancersAvailable(updatedFreelancers.filter(f => f.is_available));
  }

  const handleDeleteFreelancer = (deletedFreelancer) => {
    setFreelancers(freelancers.filter(f => f.id !== deletedFreelancer.id));
  }

  const handleUpdateFreelancerSave = (updatedFreelancer) => {
    setFreelancers(freelancers.map(freelancer => freelancer.id === updatedFreelancer.id ? updatedFreelancer : freelancer))
  }

  const handleDeleteJob = (deletedJob, freelancersToUpdate) => {

    // here is where i want to upate more than one freelancer in state. what is the best way to do this?
    // i did figure this out server side but since i am only sending a request to jobs i dont get json data back from freelancers.
    // when i get a json response back from the delete it does not include freelancers bc their job_ids are nullified
    // however, i do have access to this data from the front end which is what i'm using here

    setJobs(jobs.filter(job => job.id !== deletedJob.id));

    const updatedFreelancers = freelancersToUpdate.map(f => (
      {...f, is_available: true}
    ));

    setFreelancersAvailable([...updatedFreelancers, ...freelancersAvailable]);
  }

  const handleUpdateJob = (updatedJob) => {
      const updatedJobs = jobs.map((job) => {
        if (job.id === updatedJob.id) {
          return updatedJob;
        } else {
          return job;
        }
      });
      setJobs(updatedJobs);
  }

  const handleCreateNewJob = (newJob) => {
    setJobs([...jobs, newJob]);
  }

  const handleCreateNewFreelancer = (newFreelancer) => {
    setFreelancers([...freelancers, newFreelancer]);
  }

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path="/jobs">
          <JobList jobs={jobs} dateToString={dateToString} />
        </Route>
        <Route path="/jobs/:id">
          <JobPage freelancers={freelancers} freelancersAvailable={freelancersAvailable} jobs={jobs} onDeleteJob={handleDeleteJob} onUpdateFreelancer={handleUpdateFreelancer} onUpdateJob={handleUpdateJob} dateToString={dateToString} />
        </Route>
        <Route path="/freelancers">
          <FreelancerList freelancers={freelancers} freelancersAvailable={freelancersAvailable} onUpdateFreelancerSave={handleUpdateFreelancerSave} jobs={jobs} onDeleteFreelancer={handleDeleteFreelancer}/>
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
