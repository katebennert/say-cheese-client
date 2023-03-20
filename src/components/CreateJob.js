import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateJob({ onCreateNewJob }) {

    const history = useHistory();
    const [newJob, setNewJob] = useState({
        name: "",
        company: "",
        company_logo: "",
        start_date: "",
        end_date: "",
        description: "",
        freelancers_required: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (e.target.type === "select-one") {
            value = Number(value)
        }

        setNewJob({
            ...newJob,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:9292/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newJob),
        })
            .then(r => r.json())
            .then(newJobData => {
                onCreateNewJob(newJobData)
                history.push("/jobs")
            });
    }

    const newJobForm = (
        <div className="new-job-form">
        <h2>✨ Create New Job ✨</h2>
        <form onSubmit={handleSubmit}>
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
                    name="company_logo" 
                    autoComplete="off"
                    value={newJob.company_logo}
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
            <label>Start Date:</label>
            <div className="inputbox-fixed">
                <input 
                    type="date" 
                    name="start_date" 
                    autoComplete="off"
                    value={newJob.start_date}
                    onChange={handleChange} 
                    required="required"
                />
            </div>
            <label>End Date</label>
            <div className="inputbox-fixed">
                <input 
                    type="date" 
                    name="end_date" 
                    autoComplete="off"
                    value={newJob.end_date}
                    onChange={handleChange} 
                    required="required"
                />
            </div>
            <label>Freelancers Required</label>
            <div className="inputbox-fixed">
                <select name="freelancers_required" onChange={handleChange} value={newJob.freelancers_required}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div className="inputbox">
                <button type="submit">Create Job</button>
            </div>
        </form>
    </div>
    )

  return (
    <>{newJobForm}</>
    )
}

export default CreateJob;