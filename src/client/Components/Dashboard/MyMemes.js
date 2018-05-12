import React from 'react';
import Row from '../Row';
import MyImageCard from './MyImage.Card';

class MyMemes extends React.Component{
  render(){
    return (
      <div className="col-md-9">
        <Row>
          <MyImageCard/>
          <MyImageCard/>
          <MyImageCard/>
        </Row>
      </div>
    )
  }
}

export default MyMemes;