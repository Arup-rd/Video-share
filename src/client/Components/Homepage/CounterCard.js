import React from 'react'
import CountUp from 'react-countup';

class CounterCard extends React.Component{
  state = this.props
  onStart = () => {
    console.log('started')
  }
  render(){
    const { icon, to, title } = this.state;
    return (
    <div className="col-md-3 text-center">
      <div className="counter card p-2">
        <i className={`fa fa-${icon} fa-2x p-3`}></i>
        <h2 className="timer count-title count-number" >
          <CountUp start={10} duration={100} end={to} onStart={this.onStart}/>
        </h2>
        <p className="count-text ">{title}</p>
      </div>
    </div>
    )
  }
}

export default CounterCard;