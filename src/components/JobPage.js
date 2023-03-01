import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function JobPage() {
    const [job, setJob] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:9292/jobs/${id}`)
            .then(r => r.json())
            .then(jobData => setJob(jobData))
    }, [id]);
    
    return (
        <div>
            <p>{job.name}</p>
        </div>
    );
}

export default JobPage;
