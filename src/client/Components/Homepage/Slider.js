import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Container from '../Container'

const Slider = () => (
    <div id="slider">
        <OwlCarousel 
            className="owl-theme"
            loop margin={0} 
            nav={false}
            items={1}
        >
            <div className="item">
                <img src="images/slider1.png" alt="Slider 1"/>
            </div>
            <div className="item">
                <img src="images/slider2.png" alt="Slider 1"/>
            </div>
            <div className="item">
                <img src="images/slider1.png" alt="Slider 1"/>
            </div>
        </OwlCarousel>

        <div id="caption" className="text-white text-center">
            <Container>
                <div className="col-md-10 offset-1"> 
                    <h1 className="font-weight-bold">Keep pace with change</h1>
                    <p>consectetur adipisicing elit. Commodi dolorem minima blanditiis velit modi possimus sit repudiandae voluptates, placeat nobis eaque quam officiis quasi iure consequuntur ut, harum sunt fugiat! consectetur adipisicing elit. Commodi dolorem minima blanditiis velit modi possimus sit repudiandae voluptates, placeat nobis eaque quam officiis quasi iure consequuntur ut, harum sunt fugiat! </p>
                </div>
            </Container>
        </div>
    </div>
)
export default Slider;