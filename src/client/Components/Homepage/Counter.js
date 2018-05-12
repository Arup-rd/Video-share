import React from 'react';
import '../../Styles/counter.scss';
import Container from '../Container';
import Row from '../Row';
import CounterCard from './CounterCard';

const Counter = () => (
  <section className="py-5 bg-dark">
    <div className="wrapper">
    <Container>
      <Row>
        <CounterCard to="18000" title="Subject Matter Expertise" speed="1000" icon="code"/>
        <CounterCard to="18000" title="New Videos Daily" speed="1000" icon="video"/>
        <CounterCard to="18000" title="Gif's/Meme Daily" speed="1000" icon="spinner"/>
        <CounterCard to="18000" title="Shares Per Day" speed="1000" icon="share-alt"/>
      </Row>
    </Container>
    </div> 
  </section>
)

export default Counter;