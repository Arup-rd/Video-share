import React from 'react'
import CountUp from 'react-countup';

class CounterCard extends React.Component{
  render(){
    const { icon, to, title } = this.props;
    return (
    <div className={ `${this.props.className ? this.props.className : 'col-md-3'} text-center text-white`}>
      <div className="counter p-2">
        <i className={`fa fa-${icon} fa-2x p-3`}></i>
        <h2 className="" >
          {to  != false ? <CountUp start={0} end={to} duration={5} /> : 'Upload'}
        </h2>
        <p className="count-text ">{title}</p>
      </div>
    </div>
    )
  }
}

export default CounterCard;