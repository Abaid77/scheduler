// Filter through an state array, match appointments for the given day and return an array

export function getAppointmentsForDay(state, day) {
  let appArray = [];
  state.days.map(dayObj => {
    if (dayObj.name === day) {
    (dayObj.appointments.forEach(appID => appArray.push(appID)))
    }
  })
  const output = appArray.map(app => state.appointments[app])
  return output;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerInfo = state.interviewers[interview.interviewer]
  return {
    student: interview.student,
    interviewer: interviewerInfo

  }

}

export function getInterviewersForDay(state, day) {
  let intArray = [];
  state.days.map(dayObj => {
    if (dayObj.name === day) {
    (dayObj.interviewers.forEach(intID => intArray.push(intID)))
    }
  })
  const output = intArray.map(int => state.interviewers[int])
  return output;
}