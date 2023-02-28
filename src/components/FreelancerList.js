import React from "react";
import Freelancer from './Freelancer';

function FreelancerList({ freelancers }) {
  return (
        <div className="wrap">
                {freelancers.map(freelancer => (
                    <Freelancer key={freelancer.id} freelancer={freelancer}/>
                ))}
        </div>
   
  )
}

export default FreelancerList;