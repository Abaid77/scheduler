import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  //function for booking interview
  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, { interview })
    .then((res) => {
        const days = updateSpots(state.day, state.days, appointments)
        setState({
          ...state,
          appointments,
          days
        });
      })
   
  }

  // function for canceling an interview

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview : null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
      .then((res) => {
        const days = updateSpots(state.day, state.days, appointments)
        setState({
          ...state,
          appointments,
          days
        });
      })
  }


  //axios request for api data
  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers")
    ]).then(all => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, [])

  // return a new days array with updated spot numbers
  function updateSpots(dayName, days, appointments) {
    return days.map((day) => {
      if (day.name === dayName) {
        let spot = 0;
        day.appointments.forEach((appointment) => {
          if (appointments[appointment].interview === null) {
            spot++;
          }
        });
        day.spots = spot;
      }
      return day;
    });
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };

}