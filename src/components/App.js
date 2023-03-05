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
  const [availableFreelancers, setAvailableFreelancers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/freelancers")
      .then(r => r.json())
      .then(freelancers => {
        setFreelancers(freelancers)
        setAvailableFreelancers(freelancers.filter(freelancer => freelancer.is_available === true))
      });
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path="/jobs">
          <JobList />
        </Route>
        <Route path="/jobs/:id">
          <JobPage availableFreelancers={availableFreelancers} setAvailableFreelancers={setAvailableFreelancers}/>
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
