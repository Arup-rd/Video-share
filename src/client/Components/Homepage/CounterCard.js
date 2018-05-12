import React from 'react'

const CounterCard = (props) => (
  <div className="col-md-3 text-center">
    <div className="counter card p-2">
      <i className={`fa fa-${props.icon} fa-2x p-3`}></i>
      <h2 className="timer count-title count-number" data-to={props.to} data-speed={props.speed}></h2>
      <p className="count-text ">{props.title}</p>
    </div>
  </div>
)

export default CounterCard;