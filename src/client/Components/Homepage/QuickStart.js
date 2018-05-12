import React from 'react';
import '../../Styles/counter.scss';
import Container from '../Container';
import Row from '../Row';
import CounterCard from './CounterCard';

const QuickStart = () => (
  <section className="normal text-center bg-white py-5 bg-secondary">
    <div className="wrapper">
    <Container>
      <div className="section-title text-center py-2">
        <h2>Quick Start Guide</h2>
      </div>
      <Row>
        <div className="col-md-4">
          <span className="p-3 d-inline-block rounded-circle bg-dark">
            <i className="fa fa-3x fa-paper-plane  text-white"></i>
          </span>
          <h3>Counter on your website</h3>
          <p>At the time of adding bootstrap CSS in your website header, you also need to add font awesome CSS in the header. </p>
        </div>
        <div className="col-md-4">
          <span className="p-3 d-inline-block rounded-circle bg-dark">
            <i className="fa fa-3x fa-paper-plane  text-white"></i>
          </span>
          <h3>Counter on your website</h3>
          <p>At the time of adding bootstrap CSS in your website header, you also need to add font awesome CSS in the header. </p>
        </div>
        <div className="col-md-4">
          <span className="p-3 d-inline-block rounded-circle bg-dark">
            <i className="fa fa-3x fa-paper-plane  text-white"></i>
          </span>
          <h3>Counter on your website</h3>
          <p>At the time of adding bootstrap CSS in your website header, you also need to add font awesome CSS in the header. </p>
        </div>
      </Row>
      <div className="text-center">
        <button className="btn btn-success">Start Now</button>
      </div>
    </Container>
    </div> 
  </section>
)

export default QuickStart;