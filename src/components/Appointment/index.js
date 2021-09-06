import React from "react";
import "components/Appointment/style.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import { props } from "bluebird";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";





export default function Appointment (props) {

  //useVisualMode constants
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";



  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />
      )}  
      {mode === CREATE &&
        <Form
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          onCancel={back}
        />}
      
    </article>
  )
}