import React from "react";
import { useParams } from "react-router-dom";

function UpdateJob({ jobs }) {

    const params = useParams();
    console.log(params);

  return (
    <div>
      <h3>hi</h3>
    </div>
  )
}

export default UpdateJob;