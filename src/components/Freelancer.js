import React from "react";

function Freelancer({ freelancer }) {
  return (
    <div className="freelancer-card">
        <div className="box">
            <div className="box-top">
                <img className="box-image" src="https://images.unsplash.com/photo-1677048917344-8e846a2e2ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={freelancer.name}/>
                <div className="title-flex">
                    <h3 className="box-title">{freelancer.name}</h3>
                    <p className="user-follow-info">{freelancer.freelancer_type}</p>
                </div> {/* title-flex */}
                <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
            </div> {/* box-top */}
            <a href="#" className={freelancer.is_available ? "freelancer-button-green" : "freelancer-button-red"}>Follow Kelsie</a>
        </div> {/* box */}
    </div> 
  )
}

export default Freelancer;