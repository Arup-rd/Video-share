import React from 'react';
import '../../Styles/counter.scss';
import Container from '../Container';
import Row from '../Row';
import CounterCard from './CounterCard';

const Counter = () => (
  <section className=" bg-blue">
    <div className="wrapper">
    <Container>
      <Row>
        <CounterCard to={128000} title="Subject Matter Expertise" icon="code"/>
        <CounterCard to={18000} title="New Videos Daily" icon="video"/>
        <CounterCard to={184000} title="Gif's/Meme Daily" icon="spinner"/>
        <CounterCard to={128000} title="Shares Per Day" icon="share-alt"/>
      </Row>
    </Container>
    </div> 
  </section>
)

export default Counter;