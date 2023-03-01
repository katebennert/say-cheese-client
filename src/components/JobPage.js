import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

function JobPage({ onJobDelete }) {
    const [job, setJob] = useState({});
    const [showRedirect, setShowRedirect] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:9292/jobs/${id}`)
            .then(r => r.json())
            .then(jobData => setJob(jobData))
    }, [id]);

    function handleDeleteClick() {
        // fetch(`http://localhost:9292/jobs/${id}`, {
        //   method: "DELETE",
        // });
    
        // onJobDelete(id);
        setShowRedirect(true);
      }
    
    // full job details with "Remove Job" button and "Assign Freelancers" button. 
    // Remove job button will make 'delete' request to server
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
             </div>
         </div> 
         <div className="job-buttons-container">
             <button>Assign Freelancers</button>
             <button onClick={handleDeleteClick}>Delete Job</button>
         </div>
     </div> 
 </div>  
    )

    const redirectMessage = (
        <div>
            <h2>This job has been deleted! 🙅‍♀️ Go browse for other jobs.</h2>
        </div>
    )


    return (
       <div>{showRedirect ? redirectMessage : jobPageCard}</div>
    );
}

export default JobPage;
