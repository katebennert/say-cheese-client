import './App.css';
import React, { useEffect, useState } from "react";


function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/freelancers")
      .then((r) => r.json())
      .then((jobs) => setJobs(jobs));
  }, []);

  console.log(jobs)

  return (
    <div>
      <h1>Hello World!</h1>
      {jobs.map(job => (
        <div>
          <p>{job.name}</p>
          <img src={job.image_url} alt="" width="500" height="600"/>
        </div>
        ))}
    </div>
  );
}

export default App;
