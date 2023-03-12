import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobPage({ freelancers, jobs, availableFreelancers, onUpdateFreelancer, onDeleteJob, onUpdateJob, dateToString }) {
    const { id } = useParams();
    const [showRedirect, setShowRedirect] = useState(false);
    const [showFreelancerList, setShowFreelancerList] = useState(false);
    const [job, setJob] = useState({});
    const [freelancersOn, setFreelancersOn] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/jobs/${id}`)
            .then(r => r.json())
            .then(jobData => {
                setJob(jobData);
                setFreelancersOn(jobData.freelancers.map(freelancer => freelancer.name));
            })
    }, [id]);

    function handleDeleteClick() {
       // UnCOMMENT FOR REAL DELETE
        fetch(`http://localhost:9292/jobs/${id}`, {
          method: "DELETE",
        })
            .then(r => r.json())
            .then(deletedJob => {
                onDeleteJob(deletedJob);
                setShowRedirect(true);
                setShowFreelancerList(false);

                // will need to be wrapped in if for if there is zero?
                // data.freelancers.forEach(freelancer => {
                //     fetch(`http://localhost:9292/freelancers/${freelancer.id}`, {
                //         method: "PATCH",
                //         headers: {
                //             "Content-Type": "application/json",
                //         },
                //         body: JSON.stringify({
                //             is_available: true,
                //             job_id: null
                //         }),
                //     })
                //         .then(r => r.json())
                //         .then(updatedFreelancer => {
                //             console.log(updatedFreelancer)
                //         })
                // })
            })
    }

    function handleAssignFreelancersClick() {
        setShowFreelancerList(true);
    }

    function handleAssignToJobClick(e) {
        const freelancerId = e.target.value;

        if (!job.is_full) {
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
                .then(updatedFreelancer => {
                    onUpdateFreelancer(updatedFreelancer)
                    setFreelancersOn([...freelancersOn, updatedFreelancer.name])
                })

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
                    onUpdateJob(updatedJob);
                    setJob(updatedJob);
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
                 <p>Start Date: {dateToString(job.start_date)}</p>
                 <p>End Date: {dateToString(job.end_date)}</p>
                 <p>Freelancers Needed: {job.freelancers_needed}</p>
                 <p>Freelancers On This Project: {freelancersOn === [] ? "" : freelancersOn.join(", ")}</p>
                 <p>{job.is_full ? "FULL" : "HIRING"}!</p>
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
