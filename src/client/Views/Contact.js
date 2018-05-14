import React from 'react';
import Container from '../Components/Container';
import Row from '../Components/Row';
import Axios from 'axios';
import conf from '../config';

class Contact extends React.Component{
  state  = {
    msg: false
  }

  ContactUs = (e) => {
    e.preventDefault();
    if (this.refs.email.value && this.refs.phone.value && this.refs.description.value){
      Axios.post(`${conf.server}/api/order/contact`, {
        name: this.refs.fname.value + ' ' + this.refs.lname.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
        description: this.refs.description.value
      }).then((res) => {
        this.setState({
          msg: true
        })
      }).catch((e) => {
        this.setState({
          msg: undefined
        })
      })
    } else{
      this.setState({
        msg: undefined
      })
    }
  }
  render(){
    return(
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.173369726062!2d77.64617061427388!3d12.9607556186242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14067cca9bdd%3A0x111bbe37cc24e71a!2sThe+Leela+Palace+Bengaluru!5e0!3m2!1sen!2sbd!4v1526334526951" width="100%" height="350" frameBorder="0"  allowFullScreen></iframe>
          </div>
        </Row>
        <div className="col-md-8 offset-2">
          <form className="form-group pt-5 mt-5" onSubmit={this.ContactUs}>
            <h3 className="text-center text-pri pb-5">Fill This Form To Contact Us or Become Partner With Us</h3>
            <Row>
              <div className="col-md-6 mb-4">
                <input className="form-control" ref="fname" placeholder="First Name" type="text"/>
              </div>
              <div className="col-md-6 mb-4">
                <input className="form-control" ref="lname" placeholder="Last Name" type="text"/>
              </div>
              <div className="col-md-6 mb-4">
                <input className="form-control" ref="email" placeholder="Email" type="email"/>
              </div>
              <div className="col-md-6 mb-4">
                <input className="form-control" ref="phone" placeholder="Phone" type="text"/>
              </div>
              <div className="col-md-12 mb-4">
                <textarea ref="description" className="form-control" placeholder="Type Your Message Here..."></textarea>
              </div>
            </Row>
            <div className="text-center pt-3">
              <button type="submit" className="btn btn-pri">Send to Us</button>
            </div>
          </form>
          {this.state.msg && <div className="alert alert-success text-center col-md-6 offset-3">Successfully Sent. We will get in touch shortly</div>}
          {this.state.msg == undefined && <div className="alert alert-warning text-center col-md-6 offset-3">Cannot send. Try Again Letter...</div>}
        </div>
      </Container>
    </section>
    )
  }
}
export default Contact
