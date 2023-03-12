import React from "react";
import { Link } from "react-router-dom";

function Job({ job, dateToString }) {

  return (
    <div className="job-card-container">
        <div className="job-box">
            <div className="job-box-top">
                <img className="job-box-image" src="https://images.unsplash.com/photo-1542992804-34f8f4cb193b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9zaG9vdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt={job.name}/>
                <div className="job-title-flex">
                    <h3 className="job-box-title">{job.name}</h3>
                    <p className="company">{job.company}</p>
                </div> 
                <p className="job-description">{job.description}</p>
                <div className="job-info">
                    <p>Start Date: {dateToString(job.start_date)}</p>
                    <p>End Date: {dateToString(job.end_date)}</p>
                    <p>Freelancers Needed: {job.freelancers_needed}</p>
                </div>
            </div> {/* box-top */}
            <div className="job-buttons-container">
                <Link to={`/jobs/${job.id}`}><button className="job-button">View Job Page</button></Link>
            </div>
        </div> 
    </div> 
  )
}

export default Job;