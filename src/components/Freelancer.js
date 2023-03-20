import React, { useState } from "react";
import UpdateFreelancer from "./UpdateFreelancer";

function Freelancer({ freelancer, freelancersAvailable, jobs, onUpdateFreelancerSave, onDeleteFreelancer }) {

  const [isUpdating, setIsUpdating] = useState(false);

  function handleUpdateStatusClick() {
    setIsUpdating(true)
  }
  
  return (
    <div className="freelancer-card">
      {isUpdating ? <UpdateFreelancer freelancer={freelancer} isUpdating={isUpdating} setIsUpdating={setIsUpdating} onUpdateFreelancerSave={onUpdateFreelancerSave} onDeleteFreelancer={onDeleteFreelancer} /> :
        <div className="box">
            <div className="box-top">
                <img className="box-image" src={freelancer.image_url} alt={freelancer.name}/>
                <div className="title-flex">
                    <h3 className="box-title">{freelancer.name} {freelancersAvailable.includes(freelancer) ? "✅" : ""}</h3>
                    <p className="user-follow-info">{freelancer.freelancer_type}</p>
                </div> 
                <p className="description">{freelancer.bio}</p>
                {/* this is the jobs state issue (because jobs is not set yet?) */}
                <p>{freelancer.name}'s Current Project: {freelancer.job_id ? jobs.find(job => job.id === freelancer.job_id).name : "N/A"}</p>
            </div> 
            <button onClick={handleUpdateStatusClick} className="freelancer-button-green">Update {freelancer.name}'s Profile</button>
        </div> 
      }
    </div> 
  )
}

export default Freelancer;