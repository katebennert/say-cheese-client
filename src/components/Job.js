import React from "react";

function Job({ job }) {
  return (
    <div className="job-card">
        <div className="job-box">
            <div className="job-box-top">
                <img className="job-box-image" src="https://images.unsplash.com/photo-1677048917344-8e846a2e2ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={job.name}/>
                <div className="job-title-flex">
                    <h3 className="job-box-title">{job.name}</h3>
                    <p className="company">{job.company}</p>
                </div> {/* title-flex */}
                <p className="job-description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
            </div> {/* box-top */}
            <button className="delete-button">Remove Job</button>
        </div> {/* box */}
    </div> 
  )
}

export default Job;