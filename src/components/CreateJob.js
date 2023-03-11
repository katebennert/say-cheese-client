import React from "react";

function CreateJob() {

  return (
    <div className="new-job-form">
        <h2>✨ Create New Job ✨</h2>
        <form>
            <div className="inputbox">
                <input type="text" required="required"/>
                <span>Job Name</span>
            </div>
            <div className="inputbox">
                <input type="text" required="required"/>
                <span>Company</span>
            </div>
            <div className="inputbox">
                <input type="text" required="required"/>
                <span>Company Logo URL</span>
            </div>
            <div className="inputbox">
                <input type="text" required="required"/>
                <span>Job Start Date</span>
            </div>
            <div className="inputbox">
                <input type="text" required="required"/>
                <span>Job End Date</span>
            </div>
            <div className="inputbox">
                <input type="text" required="required"/>
                <span>Freelancers Needed</span>
            </div>
            <div className="inputbox">
                <input type="button" value="submit"/>
            </div>
        </form>
    </div>
    )
}

export default CreateJob;

    {/* <form className="create-job">
        <label> Job Name:
            <input type="text" name="name" value="" autoComplete="off"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
            />
        </label>
        <label> Company:
            <input type="text" name="company" value="" autoComplete="off"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
            />
        </label>
        <label> Logo URL:
            <input type="text" name="company-logo" value="" autoComplete="off"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
            />
        </label>
        <label> Job Start Date:
            <input type="text" name="start-date" value="" autoComplete="off"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
            />
         </label>
         <label> Job End Date:
            <input type="text" name="end-date" value="" autoComplete="off"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
            />
         </label>
         <label> Job End Date:
            <input type="text" name="description" value="" autoComplete="off"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
            />
         </label>
         <label> Freelancers Needed:
            <input type="text" name="freelancers-needed" value="" autoComplete="off"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
            />
         </label>
      <input type="submit" value="Save" />
    </form>  */}