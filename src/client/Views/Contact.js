import React from 'react';
import Container from '../Components/Container';
import Row from '../Components/Row';

const Contact = () => (
  <section id="contact" className="">
    <Container>
      <div className="section-heading text-center">
        <h1>Get Contacted With Us</h1>
      </div>
      <Row className="has-border-bottom py-5">
        <div className="col-md-6">
          <p>Donec facilisis feugiat leo, a ullamcorper nibh ornare ut. Donec sed tellus non enim dictum fermentum. Etiam lectus ligula, congue non quam cursus, lacinia imperdiet neque. Aliquam dapibus nibh sed urna iaculis eleifend. Vivamus luctus, mi sit amet malesuada posuere, metus ipsum rutrum neque, egestas pulvinar est justo vel metus. Donec feugiat turpis nisl. Pellentesque id sapien in elit ultrices sagittis sit amet in risus. Nunc vel elit non ipsum gravida mattis. Nullam ante odio, consectetur eu diam vitae, ornare maximus neque. Proin commodo finibus magna vel suscipit. Cras finibus, velit et malesuada ornare, mi enim lacinia dolor, quis ultrices dui quam eget felis. Nullam ac risus fringilla enim rutrum cursus. Sed tincidunt tortor erat, ac faucibus neque ultrices non. Duis faucibus mi vel ligula viverra, efficitur ultrices nibh mattis. Nam finibus aliquam orci, vel auctor urna iaculis vestibulum. Sed finibus faucibus massa, a efficitur sem tincidunt vitae.</p>
        </div>
        <div className="col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.287962805156!2d91.85476859999999!3d24.910122700000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750553f0bb112bf%3A0x609ec1bb21b3706a!2sJalalabad+Ragib-Rabeya+Medical+College+%26+Hospital!5e0!3m2!1sen!2sbd!4v1526160877381" width="100%" height="350" frameBorder="0" allowFullScreen></iframe>
        </div>
      </Row>
      <div className="col-md-8 offset-2">
        <form className="form-group pt-5 mt-5">
          <h3 className="text-center text-pri pb-5">Fill This Form To Contact Us or Become Partner With Us</h3>
          <Row>
            <div className="col-md-6 mb-4">
              <input className="form-control" name="fname" placeholder="First Name" type="text"/>
            </div>
            <div className="col-md-6 mb-4">
              <input className="form-control" name="lname" placeholder="Last Name" type="text"/>
            </div>
            <div className="col-md-6 mb-4">
              <input className="form-control" name="email" placeholder="Email" type="text"/>
            </div>
            <div className="col-md-6 mb-4">
              <input className="form-control" name="phone" placeholder="Phone" type="text"/>
            </div>
            <div className="col-md-12 mb-4">
              <textarea className="form-control" placeholder="Type Your Message Here..."></textarea>
            </div>
          </Row>
          <div className="text-center pt-3">
            <button type="submit" className="btn btn-pri">Send to Us</button>
          </div>
        </form>
      </div>
    </Container>
  </section>
)

export default Contact
