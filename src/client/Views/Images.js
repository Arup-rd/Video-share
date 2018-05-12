import React from 'react';
import Container from '../Components/Container';
import Search from '../Components/Videos/Search';
import Row from '../Components/Row';
import Contents from '../Components/Videos/Content';
import ImageNav from '../Components/Images/Image.Nav';
import ImageContents from '../Components/Images/Content';
import Counter from '../Components/Homepage/Counter';
import FeatureNav from '../Components/Homepage/FeatureNav';

class Videos extends React.Component{

  render(){
    return (
    <div className="content"> 
      <section className="videos py-0">
        <Container>
          <Search/>
          <Row>
            <div className="col-md-2 p-0">
              <FeatureNav/>
            </div>
            <div className="col-md-10">
              <ImageContents/>
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

