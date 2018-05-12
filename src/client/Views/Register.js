import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import Row from '../Components/Row';
import Axios from 'axios';
import { createUser } from '../Actions/auth';
import conf from '../config';


class Register extends React.Component{
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: '',
    err: null
  }

  registerHandler = (e) => {
    e.preventDefault();
    const {
      firstname = '',
      lastname = '',
      email = '',
      password ='',
      username = ''
    } = this.state;

    Axios.post(`${conf.server}/api/user/create`, {
      firstname,
      lastname,
      email,
      password,
      username
    })
    .then((res) => {
      localStorage.setItem('auth', res.data.token);
      localStorage.setItem('acc_type', res.data.acc_type);
      this.props.createUser(res.data);
      this.props.history.push('/');
      this.setState({
        err: null
      })
    })
    .catch((e) => {
      this.setState({
        err: 'Registration Failed...!'
      })
      console.log('Error login', e)
    })
  }

  render() {
    const props = this.props;
    return (
      <section className="Login text-center">
        <Container>
          <Row>
            <div id="regLoginForm" className="col-sm-5">
              <form className="form-group" onSubmit={this.registerHandler}>
                <div className="closeBtnLogin" onClick={() => props.history.push('/')}><i className="fa fa-times-circle fa-2x"></i></div>
                <h2>Sign Up</h2>
                <input type="text" placeholder="First Name" className="" 
                onChange={(e) => this.setState({
                  firstname: e.target.value
                })}/>
                <input type="text" placeholder="Last Name" className=""
                onChange={(e) => this.setState({
                  lastname: e.target.value
                })}/>
                <input type="text" placeholder="Username" className=""
                onChange={(e) => this.setState({
                  username: e.target.value
                })}/>
                <input type="text" placeholder="Email" className=""
                onChange={(e) => this.setState({
                  email: e.target.value
                })}/>
                <input type="password" placeholder="Password" className=""
                onChange={(e) => this.setState({
                  password: e.target.value
                })}/>
                <div className="d-flex">
                  <div className="mr-auto p-2">
                    <input type="checkbox" id="remember"/>
                    <label htmlFor="remember">Remember</label></div>
                  <div className="p-2"><Link to="#">Forget</Link></div>
                </div>
                <button className="btn btn-info">Register</button>
                <div className="d-flex createAccountBtn">
                  <label>Already have an account <Link to="/login">Login</Link></label>
                </div>
                <br/>
                {this.state.err &&
                <div className="alert alert-warning">
                  <p>{this.state.err}</p> 
                </div>
                }
              </form>
            </div>
          </Row>
        </Container>
      </section>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  createUser: (body) => dispatch(createUser(body))
});

export default connect(undefined, mapDispatchToProps)(Register);
