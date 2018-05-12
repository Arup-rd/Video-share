import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Container from '../Container';
import Row from '../Row';
import Card from '../Card';
import { NavLink } from 'react-router-dom';

const FeatureContent = () => (
  <section className="normal bg-light py-5">
  <Container>
    <Row>
      <div className="col-md-2">
        <ul className="nav nav-pills nav-stacked">
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="#">Real Estate</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="#">Education</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="#">Entertainment</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="#">Health/Fitness</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="#">Entertainment</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="#">IT/Technology</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="#">Finance/Investment</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="#">Others</NavLink>
          </li>
        </ul>
      </div>
      <div className="col-md-10">
        <Row>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
        </Row>
      </div>
    </Row>
    <div className="text-center">
      <button className="btn btn-outline-dark px-4">Start Sharing Now</button>
    </div>
  </Container>
</section>
)
export default FeatureContent;