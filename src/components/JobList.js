import React from "react";

function JobList({ jobs }) {

    

    return (
        <div className="list">
            <ul>
            {jobs.map(job => (
                <li>{job.name}</li>
            ))}
        </ul>
        </div>
    )
}

export default JobList;