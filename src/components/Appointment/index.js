import React from "react";
import "components/Appointment/style.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import { props } from "bluebird";
import useVisualMode from "hooks/useVisualMode";





export default function Appointment (props) {

  //useVisualMode constants
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";



  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
        {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
        {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />
)}  
      
    </article>
  )
}