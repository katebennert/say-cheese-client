import React from "react";
import Freelancer from './Freelancer';

function FreelancerList({ freelancers, onUpdateFreelancerSave, jobs, freelancersAvailable, onDeleteFreelancer }) {
  
  return (
        <div className="wrap">
                {freelancers.map(freelancer => (
                    <Freelancer key={freelancer.id} freelancer={freelancer} onUpdateFreelancerSave={onUpdateFreelancerSave} jobs={jobs} freelancersAvailable={freelancersAvailable} onDeleteFreelancer={onDeleteFreelancer}/>
                ))}
        </div>
   
  )
}

export default FreelancerList;