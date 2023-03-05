import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobPage({ availableFreelancers, setAvailableFreelancers }) {
    const { id } = useParams();
    const [job, setJob] = useState([]);
    const [freelancersOn, setFreelancersOn] = useState([]);
    const [freelancersNeeded, setFreelancersNeeded] = useState(null);
    const [showRedirect, setShowRedirect] = useState(false);
    const [showFreelancerList, setShowFreelancerList] = useState(false);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:9292/jobs/${id}`)
            .then(r => r.json())
            .then(jobData => {
                setJob(jobData)
                setFreelancersOn(jobData.freelancers.map(freelancer => freelancer.name))
                setFreelancersNeeded(jobData.freelancers_needed)
                setIsFull(jobData.is_full)
            })
    }, [id]);

    function handleDeleteClick() {
       // UnCOMMENT FOR REAL DELETE
        fetch(`http://localhost:9292/jobs/${id}`, {
          method: "DELETE",
        });
    
        // need to patch to fix freelancers situations after a job is deleted
        setShowRedirect(true);
        setShowFreelancerList(false);
    }

    function handleAssignFreelancersClick() {
        setAvailableFreelancers(availableFreelancers.filter(freelancer => freelancer.is_available === true))
        setShowFreelancerList(true);
    }

    function handleAssignToJobClick(e) {
        const freelancerId = e.target.value;
        const currentFreelancer = availableFreelancers.find(freelancer => freelancer.id == e.target.value);

        if (!isFull) {
            fetch(`http://localhost:9292/freelancers/${freelancerId}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                is_available: false,
                job_id: job.id
                }),
            })
                .then(r => r.json())
                .then(updatedFreelancer => setAvailableFreelancers(availableFreelancers.filter(freelancer => freelancer.id !== updatedFreelancer.id)))
                .then(setFreelancersOn([...freelancersOn, currentFreelancer.name]));

            fetch(`http://localhost:9292/jobs/${job.id}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                is_full: job.freelancers_needed - 1 === 0 ? true : false,
                freelancers_needed: job.freelancers_needed - 1
                }),
            })
                .then(r => r.json())
                .then(updatedJob => {
                    setJob(updatedJob)
                    setFreelancersNeeded(updatedJob.freelancers_needed)
                    setIsFull(updatedJob.is_full)
                })  
        } else {
            alert("This job is full!")
        }
    }

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
                 <p>Freelancers Needed: {freelancersNeeded}</p>
                 <p>Freelancers On This Project: {freelancersOn.join(", ")}</p>
                 <p>{isFull ? "FULL" : "HIRING"}!</p>
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

    const freelancerList = (
        <div className="job-box">{availableFreelancers.map(freelancer => (
            <div className="assign-freelancer-list" key={freelancer.id}>
                <div>{freelancer.name}</div>
                <button onClick={handleAssignToJobClick} value={freelancer.id}>Assign to Job</button>
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
