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

// QUESTIONS:
// will useContext solve the problem of having to fetch in the jobPage? i put the fetch back in because using state resulted in empty array being passed down on refresh
// generally how to pass down state in such a way that routes dont have empty arrays/objects when you reload them? this happens with jobs which affects trying to work with nested data 
// after state fixes (above) fix job name in freelancer.

// i want to update multiple freelancer objects in the array at the same time - how do i do that? (this would eliminate need for freelancersAvailable state)

// TO DO:
// add delete to freelancer

function App() {

  const [freelancers, setFreelancers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [freelancersAvailable, setFreelancersAvailable] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/freelancers")
      .then(r => r.json())
      .then(freelancerData => {
        setFreelancers(freelancerData);
        setFreelancersAvailable(freelancerData.filter(f => f.is_available));
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
      setFreelancersAvailable(updatedFreelancers.filter(f => f.is_available));
  }

  function handleDeleteFreelancer(deletedFreelancer){
    setFreelancers(freelancers.filter(f => f.id !== deletedFreelancer.id));
  }

  function handleUpdateFreelancerSave(updatedFreelancer) {
    setFreelancers(freelancers.map(freelancer => freelancer.id === updatedFreelancer.id ? updatedFreelancer : freelancer))
  }

  function handleDeleteJob(deletedJob, freelancersToUpdate) {
    setJobs(jobs.filter(job => job.id !== deletedJob.id));

    const updatedFreelancers = freelancersToUpdate.map(f => (
      {...f, is_available: true}
    ));

    setFreelancersAvailable([...updatedFreelancers, ...freelancersAvailable]);
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
