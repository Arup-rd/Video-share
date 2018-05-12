import React from 'react';
import Row from '../Row';
import MyImageCard from './MyImage.Card';
import Loader from '../Loader';

class MyVideos extends React.Component{
  render(){
    return (
      <div className="col-md-9">
        <Row>
          {/* <MyImageCard/>
          <MyImageCard/>
          <MyImageCard/>
          <MyImageCard/>
          <MyImageCard/>
          <MyImageCard/> */}
        </Row>
          <Loader/>
      </div>
    )
  }
}

export default MyVideos;