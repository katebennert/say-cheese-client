import React from "react";
import Freelancer from './Freelancer';

function FreelancerList({ freelancers, availableFreelancers, onUpdateFreelancerSave }) {
  return (
        <div className="wrap">
                {freelancers.map(freelancer => (
                    <Freelancer key={freelancer.id} freelancer={freelancer} availableFreelancers={availableFreelancers} onUpdateFreelancerSave={onUpdateFreelancerSave}/>
                ))}
        </div>
   
  )
}

export default FreelancerList;