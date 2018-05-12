import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Container from '../Container';
import Row from '../Row';
import Card from '../Card';
import FeatureNav from './FeatureNav';

const FeatureContent = () => (
  <section id="feature" className=" bg-light py-5">
  <Container>
    <Row>
      <div className="col-md-2 p-0">
        <FeatureNav/>
      </div>
      <div className="col-md-10">
        <Row>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Row>
      </div>
    </Row>
    <div className="text-center">
      <button className="btn btn-pri mt-4">Start Sharing Now</button>
    </div>
  </Container>
</section>
)
export default FeatureContent;