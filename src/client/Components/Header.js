import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoutUser } from '../Actions/auth';
import Row from './Row';
import Container from './Container';
import NavBar from './NavBar';
import AuthNav from './AuthNav';

const Header = () => (
  <header>
    <div className="bg-pri">
      <AuthNav/>
    </div>
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <Container>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <h3>Video Sharing</h3>
          <p>Awesome Slogan Here</p>
        </Link>
        <NavBar/>
        <Link to="/custom-order"><button className="btn btn-pri my-2 my-sm-0">Want Personalised Content?</button></Link>
        
      </Container>
    </nav>
  </header>
)

export default (Header)
