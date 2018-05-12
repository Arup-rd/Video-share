import React from 'react';
import Container from '../Components/Container';
import Search from '../Components/Videos/Search';
import Row from '../Components/Row';
import Contents from '../Components/Videos/Content';
import VideosNav from '../Components/Videos/Video.Nav';
import Counter from '../Components/Homepage/Counter';

class Videos extends React.Component{

  render(){
    return (
    <div className="content"> 
      <section className="videos">
        <Container>
          <Search/>
          <Row>
            <div className="col-md-2">
              <VideosNav/>
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

