import React, { useState } from "react";

function UpdateFreelancer({ freelancer, onUpdateFreelancerSave, setIsUpdating, onDeleteFreelancer }) {

    const [updatedFreelancer, setUpdatedFreelancer] = useState(freelancer);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:9292/freelancers/${freelancer.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFreelancer),
            })
                .then(r => r.json())
                .then(updatedFreelancerData => {
                    onUpdateFreelancerSave(updatedFreelancerData)
                })

        setIsUpdating(false);
        
    }

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (e.target.type === "checkbox") {
            value = e.target.checked
        }

        setUpdatedFreelancer({
            ...updatedFreelancer,
            [name]: value
        });
    }

    const handleDeleteFreelancerClick = (e) => {
        const freelancerID = e.target.value;

        fetch(`http://localhost:9292/freelancers/${freelancerID}`, {
          method: "DELETE",
        })
            .then(r => r.json())
            .then(deletedFreelancer => {
                onDeleteFreelancer(deletedFreelancer);
            })
    }

    return (
        <div className="box-update">
            <form onSubmit={handleUpdateSubmit}>
                <div className="box-top">
                    <img className="box-image-update" src={freelancer.image_url} alt={freelancer.name}/>
                        <input
                            type="text"
                            name="name"
                            autoComplete="off"
                            value={updatedFreelancer.image_url}
                            onChange={handleChange}
                        />
                    <div className="title-flex">
                        <input
                            type="text"
                            name="name"
                            autoComplete="off"
                            value={updatedFreelancer.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="freelancer_type"
                            autoComplete="off"
                            value={updatedFreelancer.freelancer_type}
                            onChange={handleChange}
                        />
                    </div> 
                        <textarea
                            className="bio-update"
                            name="bio"
                            autoComplete="off"
                            value={updatedFreelancer.bio}
                            onChange={handleChange}
                        />
                        <label className="available-box-update">Available? {" "}
                            <input
                                type="checkbox"
                                name="is_available"
                                checked={updatedFreelancer.is_available}
                                value={updatedFreelancer}
                                onChange={handleChange}
                            />
                        </label>
                </div> 
                <button type="submit" className="freelancer-button-update">Save Changes</button>
            </form>
            <button className="freelancer-button-delete" onClick={handleDeleteFreelancerClick} value={freelancer.id} >🙅‍♀️ Delete Freelancer 🙅‍♀️</button>
        </div> 
    )
}

export default UpdateFreelancer;