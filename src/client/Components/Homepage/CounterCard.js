import React from 'react'
import CountUp from 'react-countup';

class CounterCard extends React.Component{
  state = this.props

  render(){
    const { icon, to, title } = this.state;
    return (
    <div className="col-md-3 text-center">
      <div className="counter card p-2">
        <i className={`fa fa-${icon} fa-2x p-3`}></i>
        <h2 className="timer count-title count-number" >
          <CountUp start={10} end={to}/>
        </h2>
        <p className="count-text ">{title}</p>
      </div>
    </div>
    )
  }
}

export default CounterCard;