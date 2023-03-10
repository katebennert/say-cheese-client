import React from "react";

function CreateJob() {
  return (
    <form className="create-job">
        <label> Name:
            <input type="text" name="name" value="" autoComplete="off"
                // value={messageBody}
                // onChange={(e) => setMessageBody(e.target.value)}
            />
        </label>
      <input type="text" name="company" value="" autoComplete="off"
        // value={messageBody}
        // onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="text" name="company-logo" value="" autoComplete="off"
        // value={messageBody}
        // onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="text" name="start-date" value="" autoComplete="off"
        // value={messageBody}
        // onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="text" name="end-date" value="" autoComplete="off"
        // value={messageBody}
        // onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="text" name="description" value="" autoComplete="off"
        // value={messageBody}
        // onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="text" name="freelancers-needed" value="" autoComplete="off"
        // value={messageBody}
        // onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="submit" value="Save" />
      {/**
       * name
       * company
       * company logo
       * start date
       * end date
       * description
       * freelancers needed
       * is full = false
       * isopen = true or based on start and end
       */}
    </form>
  )
}

export default CreateJob;