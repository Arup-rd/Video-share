import React from 'react';
import Container from '../Components/Container';
import Row from '../Components/Row';

const About = () => (
  <section id="about" className="pt-0">
    <Container>
      <Row className="has-border-bottom ">
        <div className="section-heading text-center col-md-12 py-5">
          <h1>Our Vision</h1>
        </div>
        <div className="col-md-6">
          <p>Donec facilisis feugiat leo, a ullamcorper nibh ornare ut. Donec sed tellus non enim dictum fermentum. Etiam lectus ligula, congue non quam cursus, lacinia imperdiet neque. Aliquam dapibus nibh sed urna iaculis eleifend. Vivamus luctus, mi sit amet malesuada posuere, metus ipsum rutrum neque, egestas pulvinar est justo vel metus. Donec feugiat turpis nisl. Pellentesque id sapien in elit ultrices sagittis sit amet in risus. Nunc vel elit non ipsum gravida mattis. Nullam ante odio, consectetur eu diam vitae, ornare maximus neque. Proin commodo finibus magna vel suscipit. Cras finibus, velit et malesuada ornare, mi enim lacinia dolor, quis ultrices dui quam eget felis. Nullam ac risus fringilla enim rutrum cursus. Sed tincidunt tortor erat, ac faucibus neque ultrices non. Duis faucibus mi vel ligula viverra, efficitur ultrices nibh mattis. Nam finibus aliquam orci, vel auctor urna iaculis vestibulum. Sed finibus faucibus massa, a efficitur sem tincidunt vitae.</p>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src="/images/g1.jpg"/>
        </div>
      </Row>
      <Row className="has-border-bottom">
        <div className="section-heading text-center col-md-12 py-5">
          <h1>Our Mission</h1>
        </div>
        <div className="col-md-6 ">
          <img className="img-fluid" src="/images/g1.jpg"/>
        </div>
        <div className="col-md-6">
          <p>Donec facilisis feugiat leo, a ullamcorper nibh ornare ut. Donec sed tellus non enim dictum fermentum. Etiam lectus ligula, congue non quam cursus, lacinia imperdiet neque. Aliquam dapibus nibh sed urna iaculis eleifend. Vivamus luctus, mi sit amet malesuada posuere, metus ipsum rutrum neque, egestas pulvinar est justo vel metus. Donec feugiat turpis nisl. Pellentesque id sapien in elit ultrices sagittis sit amet in risus. Nunc vel elit non ipsum gravida mattis. Nullam ante odio, consectetur eu diam vitae, ornare maximus neque. Proin commodo finibus magna vel suscipit. Cras finibus, velit et malesuada ornare, mi enim lacinia dolor, quis ultrices dui quam eget felis. Nullam ac risus fringilla enim rutrum cursus. Sed tincidunt tortor erat, ac faucibus neque ultrices non. Duis faucibus mi vel ligula viverra, efficitur ultrices nibh mattis. Nam finibus aliquam orci, vel auctor urna iaculis vestibulum. Sed finibus faucibus massa, a efficitur sem tincidunt vitae.</p>
        </div>
      </Row>
      <div className="text-center pt-4">
        <button className="btn btn-pri">Be The Part Of Our Business</button>
      </div>
    </Container>
  </section>
)

export default About
