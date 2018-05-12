import React from 'react';
import { connect } from 'react-redux'
import Container from './Container';
import Row from './Row';
import { Link } from 'react-router-dom'
import UserProfileDropdown from './UserProfileDropdown';
import { LogoutUser } from '../Actions/auth';


class AuthNav extends React.Component{
  render(){
    const {isAuthenticated, LogoutUser, ...props} = this.props;
    return(
      <Container>
        <Row>
          <div className="col-md-12  my-2">
            <div className="float-left">
              <Link to="tel:+998888888888" className="btn btn-outline-success">Call Us: +99 888-888-8888</Link>
            </div>
            {isAuthenticated ?
              <UserProfileDropdown/>
              :
              <div className="float-right">
                <Link to="/login" className="btn btn-info mr-2 py-1">Login</Link>
                <Link to="/register" className="btn btn-info py-1">Register</Link>
              </div>
            }
          </div>
        </Row>
      </Container>
    )
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token
})

const mapDispatchToProps = (dispatch) => ({
  LogoutUser: () => dispatch(LogoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(AuthNav)