import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";


export default function Form (props) {

  const [currentName, setName] = useState(props.name || "");
  const [currentInterviewer, setInterviewer] = useState(props.interviewer || null)

  //function to clear all fields
  const reset = () => {
    setName("");
    setInterviewer(null)
  }

  const cancel = () => {
    reset();
    props.onCancel();
    
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setName(event.target.value)}
            value={currentName}
            /*
              This must be a controlled component
            */
          />
        </form>
        <InterviewerList interviewers={props.interviewers} interviewer={currentInterviewer} setInterviewer={(event) => setInterviewer(event)} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => 
            currentName === "" || currentInterviewer === null ? "disabled" : 
            props.onSave(currentName, currentInterviewer)}>Save</Button>
        </section>
      </section>
    </main>
  )
}