// Banner.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner0.jpeg" // Reemplaza con la ruta de tu primera imagen
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner1.jpeg" // Reemplaza con la ruta de tu segunda imagen
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner2.jpeg" // Reemplaza con la ruta de tu tercera imagen
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
