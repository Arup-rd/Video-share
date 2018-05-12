import React from 'react';
import Container from '../Components/Container';
import Search from '../Components/Videos/Search';
import Row from '../Components/Row';
import Contents from '../Components/Videos/Content';
import VideosNav from '../Components/Videos/Video.Nav';
import Counter from '../Components/Homepage/Counter';
import FeatureNav from '../Components/Homepage/FeatureNav';

class Videos extends React.Component{

  render(){
    return (
    <div className="content"> 
      <section className="videos p-0">
        <Container>
          <Search/>
          <Row>
            <div className="col-md-2 p-0">
              <FeatureNav/>
            </div>
            <div className="col-md-10">
              <Contents/>
            </div>
          </Row>
        </Container>
      </section>
      <Counter/>
    </div>
    )
  }
}

export default (Videos)

