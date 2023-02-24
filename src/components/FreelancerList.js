import React from "react";

function FreelancerList({ freelancers }) {
  return (
    <div className="list">
        <ul>
            {freelancers.map(freelancer => (
                <li>{freelancer.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default FreelancerList;