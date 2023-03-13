import React from "react";
import Freelancer from './Freelancer';

function FreelancerList({ freelancers, availableFreelancers }) {
  return (
        <div className="wrap">
                {freelancers.map(freelancer => (
                    <Freelancer key={freelancer.id} freelancer={freelancer} availableFreelancers={availableFreelancers}/>
                ))}
        </div>
   
  )
}

export default FreelancerList;