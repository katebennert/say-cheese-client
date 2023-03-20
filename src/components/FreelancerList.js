import React from "react";
import Freelancer from './Freelancer';

function FreelancerList({ freelancers, onUpdateFreelancerSave, jobs, freelancersAvailable }) {
  
  return (
        <div className="wrap">
                {freelancers.map(freelancer => (
                    <Freelancer key={freelancer.id} freelancer={freelancer} onUpdateFreelancerSave={onUpdateFreelancerSave} jobs={jobs} freelancersAvailable={freelancersAvailable} />
                ))}
        </div>
   
  )
}

export default FreelancerList;