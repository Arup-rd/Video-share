import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import { LogoutUser, setUser } from '../../Actions/auth';
import Axios from 'axios';
import conf from '../config';
import { LogoutUser } from '../Actions/auth';


class UserProfileDropdown extends React.Component{
  state = {
    data: false
  }

  componentDidMount(){
    Axios.get(`${conf.server}/api/user/me`, {
      headers: {
        'authorization': localStorage.getItem('auth')
      }
    }).then((res) => {
      // this.props.userData(res.data)
      this.setState({
        data: res.data
      })
    }).catch((e) => {
      localStorage.clear();
      // this.props.LogoutUser();
      console.log(e)
    })
  }


  render() {
    const { token, LogoutUser, userData, ...props} = this.props;
    const data = this.state.data;
    return (
      <div className="float-right">
        {data ?      
          <div className="dropdown p-2">
            <Link to="#" data-toggle="dropdown">
              Hi, {data.user.firstname} {data.user.lastname} 
              <span ><i className="fa fa-arrow-down"></i></span>
            </Link>
            <ul className="dropdown-menu  dropdown-menu-right p-0 mt-10" style={{top: 20}}>
              <li className="nav-item">
                <Link activeClassName="active" to="/myaccount" className="nav-link text-info"><i className="fa fa-user"></i> My Account</Link>
              </li>
              <li className="nav-item">
                <Link activeClassName="active" to="/myaccount/settings" className="nav-link text-info"><i className="fa fa-key"></i> Account Setting</Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => {
                    localStorage.clear();
                    LogoutUser();
                }} activeClassName="active" to="#" className="nav-link text-info"><i className="fa fa-sign-out"></i> Logout</Link>
              </li>
            </ul>
          </div> 
        : <span className="text-light p-2">'Please Wait...'</span> }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token, 
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  LogoutUser: () => dispatch(LogoutUser()),
  userData: (data) => dispatch(setUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileDropdown);