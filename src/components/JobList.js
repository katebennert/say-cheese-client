import React, { useState, useEffect } from "react";
import Job from "./Job";

function JobList() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/jobs")
          .then(r => r.json())
          .then(jobs => setJobs(jobs));
      }, []);

    return (
        <div className="wrap">
            {jobs.map(job => (
                <Job key={job.id} job={job} />
            ))}
        </div>
    )
}

export default JobList;