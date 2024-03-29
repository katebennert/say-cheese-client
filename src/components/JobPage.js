import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function JobPage({ freelancers, jobs, freelancersAvailable, onUpdateFreelancer, onDeleteJob, onUpdateJob, dateToString }) {
    const { id } = useParams();
    const history = useHistory();
    const [job, setJob] = useState({
        name: "",
        company: "",
        company_logo: "",
        start_date: "",
        end_date: "",
        freelancers: "",
        description: "",
        freelancers_required: ""
    });
    const [showFreelancerList, setShowFreelancerList] = useState(false);

    useEffect(() => {
        const currentJob = jobs.find(j => j.id === parseInt(id));
        setJob(currentJob);
    }, [id, jobs]);

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/jobs/${id}`, {
          method: "DELETE",
        })
            .then(r => r.json())
            .then(deletedJob => {
                onDeleteJob(deletedJob, job.freelancers);
                history.push("/jobs");
            })
    }

    const handleAssignFreelancersClick = () => {
        setShowFreelancerList(true);
    }

    const handleAssignToJobClick = (e) => {
       const freelancerID = e.target.value;
       const freelancerToAssign = freelancers.find(f => f.id === Number(freelancerID));

        if (job.freelancers_required - job.freelancers.length > 0) {
            fetch(`http://localhost:9292/freelancers/${freelancerID}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...freelancerToAssign,
                    job_id: job.id,
                    is_available: false
                }),
            })
                .then(r => r.json())
                .then(freelancerData => {
                    onUpdateFreelancer(freelancerData);
                    setJob({...job, freelancers: [...job.freelancers, freelancerToAssign]});
                    onUpdateJob({...job, freelancers: [...job.freelancers, freelancerToAssign]});
                })
        } else {
            alert("This job is full!")
        }
    }

    const jobPageCard = (
        <div className="job-page-card-container">
     <div className="job-box">
         <div className="job-box-top">
             <img className="job-box-image" src={job.company_logo} alt={job.name}/>
             <div className="job-title-flex">
                 <h3 className="job-box-title">{job.name}</h3>
                 <p className="company">{job.company}</p>
             </div> 
             <p className="job-description">{job.description}</p>
             <div className="job-info">
                 <p>Start Date: {dateToString(job.start_date)}</p>
                 <p>End Date: {dateToString(job.end_date)}</p>
                 <p>Freelancers Needed: {job.freelancers_required - job.freelancers.length}</p>
                 <p>Freelancers On This Project: {job.freelancers ? job.freelancers.map(f => f.name).join(", "): null}</p>
                 <p>{job.freelancers_required - job.freelancers.length === 0 ? "FULL" : "HIRING"}!</p>
             </div>
         </div> 
         <div className="job-buttons-container">
             <button className="delete-button" onClick={handleAssignFreelancersClick}>Assign Freelancers</button>
             <button className="delete-button" onClick={handleDeleteClick}>Delete Job</button>
         </div>
     </div> 
 </div>  
    )

    const freelancerList = (
        <div className="assign-freelancer-box">
            <h3>Available Freelancers:</h3>
            <div className="freelancer-list-container">
                {freelancersAvailable.map(freelancer => (
                    <div className="assign-freelancer-list-item" key={freelancer.id}>
                        <div>{freelancer.name} - {freelancer.freelancer_type}
                            <button onClick={handleAssignToJobClick} value={freelancer.id}>Assign to Job</button>
                        </div>
                    </div>
                ))}</div>
            </div>
    )

    return (
        <div className="job-wrap">
            <div>{jobPageCard}</div>
            <div>{showFreelancerList ? freelancerList : null}</div>
        </div>
    );
}

export default JobPage;
