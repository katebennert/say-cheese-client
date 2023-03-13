import React from "react";

function Freelancer({ freelancer, availableFreelancers }) {
  
  return (
    <div className="freelancer-card">
        <div className="box">
            <div className="box-top">
                <img className="box-image" src={freelancer.image_url} alt={freelancer.name}/>
                <div className="title-flex">
                    <h3 className="box-title">{freelancer.name} {availableFreelancers.find(fl => freelancer.id === fl.id) ? "✅" : ""}</h3>
                    <p className="user-follow-info">{freelancer.freelancer_type}</p>
                </div> 
                <p className="description">{freelancer.bio}</p>
            </div> 
            <p className="freelancer-button-green">Follow {freelancer.name}</p>
        </div> 
    </div> 
  )
}

export default Freelancer;