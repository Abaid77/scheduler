import React from "react";
import 'components/DayListItem.scss'
const classNames = require('classnames');

const formatSpots = (spots) => {
  if (spots === 0) {
    return 'no spots remaining';
  }
  if (spots === 1) {
    return `${spots} spot remaining`
  }
  return `${spots} spots remaining`
}


export default function DayListItem(props) {
  const spotsMessage = formatSpots(props.spots)


  let dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': !props.spots
  })

  //JSX Return
  return (
    <li data-testid="day" className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spotsMessage}</h3>
    </li>
  );
}