import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoutUser } from '../Actions/auth';
import Row from './Row';
import Container from './Container';
import NavBar from './NavBar';
import AuthNav from './AuthNav';

const Header = () => (
  <header>
    <AuthNav/>
      
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Container>
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavBar/>
      </Container>
    </nav>
  </header>
)

export default (Header)
