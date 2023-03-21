import React from "react";
import { NavLink } from "react-router-dom";

function Job({ currentJob, dateToString }) {

  return (
    <div className="job-card-container">
        <div className="job-box">
                <div className="job-box-top">
                    <img className="job-box-image" src={currentJob.company_logo} alt={currentJob.name}/>
                    <div className="job-title-flex">
                        <h3 className="job-box-title">{currentJob.name}</h3>
                        <p className="company">{currentJob.company}</p>
                    </div> 
                    <p className="job-description">{currentJob.description}</p>
                    <div className="job-info">
                        <p>Start Date: {dateToString(currentJob.start_date)}</p>
                        <p>End Date: {dateToString(currentJob.end_date)}</p>
                        <p>Freelancers Required on Job: {currentJob.freelancers_required}</p>
                    </div>
                </div> {/* box-top */}
                <div className="job-buttons-container">
                    <NavLink to={`/jobs/${currentJob.id}`}><button className="job-button" >View Job Page</button></NavLink>
                </div>
            </div> 
    </div> 
  )
}

export default Job;