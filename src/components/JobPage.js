import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobPage({ onJobDelete, freelancers }) {
    const [job, setJob] = useState([]);
    const [freelancersOn, setFreelancersOn] = useState([]);
    const [showRedirect, setShowRedirect] = useState(false);
    const [showFreelancerList, setShowFreelancerList] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:9292/jobs/${id}`)
            .then(r => r.json())
            .then(jobData => {
                setJob(jobData)
                setFreelancersOn(jobData.freelancers.map(freelancer => freelancer.name))
            })
    }, [id]);

    function handleDeleteClick() {
        // UnCOMMENT FOR REAL DELETE
        // fetch(`http://localhost:9292/jobs/${id}`, {
        //   method: "DELETE",
        // });
    
        // onJobDelete(id);
        setShowRedirect(true);
        setShowFreelancerList(false);
    }

    function handleAssignFreelancersClick() {
        setShowFreelancerList(true);
    }

    function handleAssignToJobClick(e) {
        // patch request to update freelancer table to available true and job id to job id
        // patch request to update jobs table to update freelancers needed and is full for that job
        // update state for job and jobs?
        // update state for freelancers?
        // updata state for freelancersOn
        setFreelancersOn([...freelancersOn, e.target.value])
    }
    
    // assign freelancers will pull up available freelancer list and clicking on a freelancer from that list will 
    // update isAvail to false and add the freelancer to the job
    const jobPageCard = (
        <div className="job-page-card-container">
     <div className="job-box">
         <div className="job-box-top">
             <img className="job-box-image" src="https://images.unsplash.com/photo-1542992804-34f8f4cb193b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9zaG9vdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt={job.name}/>
             <div className="job-title-flex">
                 <h3 className="job-box-title">{job.name}</h3>
                 <p className="company">{job.company}</p>
             </div> 
             <p className="job-description">{job.description}</p>
             <div className="job-info">
                 <p>Start Date: {job.start_date}</p>
                 <p>End Date: {job.end_date}</p>
                 <p>Freelancers Needed: {job.freelancers_needed}</p>
                 <p>Freelancers On This Project: {freelancersOn.map(freelancer => freelancer + " ")}</p>
             </div>
         </div> 
         <div className="job-buttons-container">
             <button onClick={handleAssignFreelancersClick}>Assign Freelancers</button>
             <button onClick={handleDeleteClick}>Delete Job</button>
         </div>
     </div> 
 </div>  
    )

    const redirectMessage = (
        <div className="message">
            <h2>This job has been deleted! 🙅‍♀️ Go browse for other jobs.</h2>
        </div>
    )

    const availableFreelancers = freelancers.filter(freelancer => freelancer.is_available === true);

    const freelancerList = (
        <div className="job-box">{availableFreelancers.map(freelancer => (
            <div className="assign-freelancer-list" key={freelancer.id}>
                <div>{freelancer.name}</div>
                <button onClick={handleAssignToJobClick} value={freelancer.name} >Assign to Job</button>
            </div>
        ))}</div>
    )

    return (
        <div className="wrap">
            <div>{showRedirect ? redirectMessage : jobPageCard}</div>
            <div>{showFreelancerList ? freelancerList : null}</div>
        </div>
    );
}

export default JobPage;
