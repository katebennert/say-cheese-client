import React, { useState } from "react";

function CreateJob() {

    const [newJob, setNewJob] = useState({
        name: "",
        company: "",
        companyLogo: "",
        startDate: null,
        endDate: null,
        description: "",
        freelancersNeeded: null
    });

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        // if dropdown another thing

        setNewJob({
            ...newJob,
            [name]: value
        });

        console.log(newJob)
    }

  return (
    <div className="new-job-form">
        <h2>✨ Create New Job ✨</h2>
        <form>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="name" 
                    autoComplete="off"
                    value={newJob.name}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Job Name</span>
            </div>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="company" 
                    autoComplete="off"
                    value={newJob.company}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Company</span>
            </div>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="companyLogo" 
                    autoComplete="off"
                    value={newJob.companyLogo}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Company Logo URL</span>
            </div>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="description" 
                    autoComplete="off"
                    value={newJob.description}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Job Description</span>
            </div>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="startDate" 
                    autoComplete="off"
                    value={newJob.startDate}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Job Start Date</span>
            </div>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="endDate" 
                    autoComplete="off"
                    value={newJob.endDate}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Job End Date</span>
            </div>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="freelancersNeeded" 
                    autoComplete="off"
                    value={newJob.freelancersNeeded}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Freelancers Needed</span>
            </div>
            <div className="inputbox">
                <button type="submit">Create Job</button>
            </div>
        </form>
    </div>
    )
}

export default CreateJob;