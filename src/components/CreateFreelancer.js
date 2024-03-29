import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateFreelancer({ onCreateNewFreelancer }) {

    const history = useHistory();
    const [newFreelancer, setNewFreelancer] = useState({
        name: "",
        email: "",
        bio: "",
        freelancer_type: "",
        image_url: "",
        is_available: true
    });

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        setNewFreelancer({
            ...newFreelancer,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:9292/freelancers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFreelancer),
        })
            .then(r => r.json())
            .then(newFreelancerData => {
                onCreateNewFreelancer(newFreelancerData)
                history.push("/freelancers");
            });
    }

    const newFreelancerForm = (
        <div className="new-job-form">
        <h2>✨ Create New Freelancer ✨</h2>
        <form onSubmit={handleSubmit}>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="name" 
                    autoComplete="off"
                    value={newFreelancer.name}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Freelancer Name</span>
            </div>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="email" 
                    autoComplete="off"
                    value={newFreelancer.email}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Email</span>
            </div>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="bio" 
                    autoComplete="off"
                    value={newFreelancer.bio}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Bio</span>
            </div>
            <div className="inputbox">
                <input 
                    type="text" 
                    name="image_url" 
                    autoComplete="off"
                    value={newFreelancer.image_url}
                    onChange={handleChange} 
                    required="required"
                />
                <span>Image URL</span>
            </div>
            <label>What kind of work do you do?</label>
            <div className="inputbox-fixed">
                <select name="freelancer_type" onChange={handleChange} value={newFreelancer.freelancer_type}>
                    <option>Food Stylist</option>
                    <option>Culinary Producer</option>
                    <option>Photographer</option>
                    <option>Web Designer</option>
                    <option>Prop Stylist</option>
                </select>
            </div>
            <div className="inputbox">
                <button type="submit">Create Freelancer</button>
            </div>
        </form>
    </div>
    )

  return (
    <>{newFreelancerForm}</>
    )
}

export default CreateFreelancer;