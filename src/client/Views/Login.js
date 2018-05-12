import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Axios from 'axios'
import Container from '../Components/Container'
import Row from '../Components/Row'
import { startLogin } from '../Actions/auth'
import conf from '../config';


class Login extends React.Component{
  state = {
    email: '',
    password: '',
    err: null
  }

  loginHandler = (e) => {
    e.preventDefault();
    Axios.post(`${conf.server}/api/user/login`, {
      email: this.state.email, 
      password: this.state.password
    })
    .then((res) => {
      // console.log(res.data)
      localStorage.setItem('auth', res.data.token);
      localStorage.setItem('acc_type', res.data.acc_type);
      this.props.startLogin(res.data);
      this.props.history.push('/myaccount');
    })
    .catch((e) => {
      this.setState({
        err: 'Login Unsuccessfull'
      })
      console.log('Error login', e)
    })
  }

  render(){
    const props = this.props;
    return (
      <section className="Login text-center">
        <Container>
          <Row>
            <div id="regLoginForm" className="col-sm-5">
              <form className="form-group" onSubmit={this.loginHandler} >
                <div 
                  className="closeBtnLogin" 
                  onClick={() => props.history.push('/')}><i className="fa fa-times-circle fa-2x"></i></div>
                <h2>Login</h2>
                <input required="required" type="email" placeholder="Email" className="" onChange={(e) => this.setState({
                  email: e.target.value
                })}/>
                <input required type="password" placeholder="Password" className=""onChange={(e) => this.setState({
                  password: e.target.value
                })}/>
                <div className="d-flex">
                  <div className="mr-auto p-2">
                    <input type="checkbox" id="remember"/>
                    <label htmlFor="remember">Remember</label></div>
                  <div className="p-2"><Link to="#">Forget</Link></div>
                </div>
                <input type="submit" className="btn btn-info" defaultValue="Login"/>
                <div className="d-flex createAccountBtn">
                  <label><Link to="/register">Create an Account</Link></label>
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
  startLogin: (body) => dispatch(startLogin(body))
});

export default connect(undefined, mapDispatchToProps)(Login);

