import React from 'react';
import {Button} from './Button';
import '../App.css';
import './ContentSection.css';


function ContentSection() {
  return (
    <div className='content-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>Your Dream Home Awaits</h1>
        <p>What are you waiting for?</p>
        <div className='content-btns'>
          <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
            Get Started
          </Button>
          <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
            Watch this video <i className='far fa-play-circle' />
          </Button>

        </div>
    </div>
  );
}

export default ContentSection;
