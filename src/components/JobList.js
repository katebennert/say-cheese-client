import React from "react";
import Job from "./Job";

function JobList({ jobs, dateToString }) {

    return (
        <div className="job-wrap">
            {jobs.map(job => (
                <Job key={job.id} job={job} dateToString={dateToString} />
            ))}
        </div>
    )
}

export default JobList;