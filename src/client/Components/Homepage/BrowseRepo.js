import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Container from '../Container';
import Row from '../Row';

const BrowseRepo = () => (
  <section className="normal text-center bg-white">
  <Container>
    <div className="col-md-10 offset-1">
        <h2 className="title font-weight-bold text-pri py-1">Video, Gif's, Meme Marketing is Crucial in 2018</h2>
        <h5 className="py-1">Drive more sales to your business by sharing the ready to share personalised video content</h5>
        <div className="">
          <p>
            2018 is all about the new way of marketing, attract & engage your target audience with the visually applaeaning videos, iamges, gif's memes to drive more traction for your business & drive more sales.
          </p>
          <button className="btn btn-pri mt-4">Browse Our Repository Now</button>
        </div>
    </div>
    </Container>
</section>
)
export default BrowseRepo;