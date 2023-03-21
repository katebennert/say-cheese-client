import React, { useState } from "react";
import UpdateFreelancer from "./UpdateFreelancer";

function Freelancer({ freelancer, freelancersAvailable, onUpdateFreelancerSave, onDeleteFreelancer }) {

  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateStatusClick = () => {
    setIsUpdating(true)
  }

  const availableIDs = freelancersAvailable.map(f => f.id);
  
  return (
    <div className="freelancer-card">
      {isUpdating ? <UpdateFreelancer freelancer={freelancer} isUpdating={isUpdating} setIsUpdating={setIsUpdating} onUpdateFreelancerSave={onUpdateFreelancerSave} onDeleteFreelancer={onDeleteFreelancer} /> :
        <div className="box">
            <div className="box-top">
                <img className="box-image" src={freelancer.image_url} alt={freelancer.name}/>
                <div className="title-flex">
                    <h3 className="box-title">{freelancer.name} {availableIDs.includes(freelancer.id) ? "✅" : ""}</h3>
                    <p className="user-follow-info">{freelancer.freelancer_type}</p>
                </div> 
                <p className="description">{freelancer.bio}</p>
            </div> 
            <button onClick={handleUpdateStatusClick} className="freelancer-button-green">Update {freelancer.name}'s Profile</button>
        </div> 
      }
    </div> 
  )
}

export default Freelancer;