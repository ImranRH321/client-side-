import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.makeagif.com/media/3-16-2016/_fA2L8.gif"
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
  <img
      className="d-block w-100"
      src="https://i.gifer.com/KWEU.gif"  alt=''
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-sydney-00-index2-1499721081.gif" alt=''
    />
    {/* <img
      className="d-block w-100"
      src="https://i.gifer.com/KWEU.gif"  alt=''
    /> */}

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;