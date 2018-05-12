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
          <div className="col-md-12  my-3">
            <div className="float-left">
              <Link to="tel:+998888888888" className="text-white">Call Us: +99 888-888-8888</Link>
            </div>
            {isAuthenticated ?
              <UserProfileDropdown/>
              :
              <div className="float-right text-white">
                <Link to="/login" className="mr-2 py-1 text-white">Login</Link>
                <Link to="/register" className="py-1 text-white">Register</Link>
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