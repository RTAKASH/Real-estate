import React from 'react';
import "../css/property.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const carousel = () => {
  return (
    <Carousel className='main-slide'>
      <div>
        <img src="House.png" alt="House" style={{ height: '150px', width: '50%' }} />
      </div>
      <div>
        <img src="House2.png" alt="House2" style={{ height: '150px', width: '50%' }} />
      </div>
      <div>
        <img src="House3.png" alt="House3" style={{ height: '150px', width: '50%' }} />
      </div>
      <div>
        <img src="House4.png" alt="House3" style={{ height: '150px', width: '50%' }} />
      </div>
      <div>
        <img src="House5.png" alt="House3" style={{ height: '150px', width: '50%' }} />
      </div>
    </Carousel>
  );
}

export default carousel;
