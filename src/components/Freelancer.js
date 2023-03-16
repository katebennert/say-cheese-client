import React, { useState } from "react";
import UpdateFreelancer from "./UpdateFreelancer";

function Freelancer({ freelancer, availableFreelancers, onUpdateFreelancerSave }) {

  const [isUpdating, setIsUpdating] = useState(false);

  function handleUpdateStatusClick() {
    setIsUpdating(true)
  }
  
  return (
    <div className="freelancer-card">
      {isUpdating ? <UpdateFreelancer freelancer={freelancer} availabeFreelancers={availableFreelancers} isUpdating={isUpdating} setIsUpdating={setIsUpdating} onUpdateFreelancerSave={onUpdateFreelancerSave} /> :
        <div className="box">
            <div className="box-top">
                <img className="box-image" src={freelancer.image_url} alt={freelancer.name}/>
                <div className="title-flex">
                    <h3 className="box-title">{freelancer.name} {availableFreelancers.find(fl => freelancer.id === fl.id) ? "✅" : ""}</h3>
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