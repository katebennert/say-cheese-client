import React from "react";
import Job from "./Job";

function JobList({ jobs, dateToString }) {

    return (
        <div className="job-wrap">
            {jobs.map(currentJob => (
                <Job key={currentJob.id} currentJob={currentJob} dateToString={dateToString} />
            ))}
        </div>
    )
}

export default JobList;