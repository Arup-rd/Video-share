import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';

const Slider = () => (
    <div id="slider">
        <OwlCarousel 
            className="owl-theme"
            loop margin={0} 
            nav={false}
            items={1}
        >
            <div className="item">
                <img src="images/slider.png" alt="Slider 1"/>
            </div>
            <div className="item">
                <img src="images/slider.png" alt="Slider 1"/>
            </div>
            <div className="item">
                <img src="images/slider.png" alt="Slider 1"/>
            </div>
        </OwlCarousel>
    </div>
)
export default Slider;