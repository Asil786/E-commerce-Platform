import React from "react";
import image1 from "./../assets/1.jpg";
import image2 from "./../assets/2.jpg";
import image3 from "./../assets/3.jpg";
import image4 from "./../assets/4.jpg";
import image5 from "./../assets/5.jpg";
import image6 from "./../assets/6.jpg";
import image7 from "./../assets/7.jpg";
import image8 from "./../assets/8.jpg";
import './Carousel.css';
import { Carousel } from "react-bootstrap";

const CarouselContainer = () => {
  return ( 
    <div className="carousel">
      <Carousel controls={true} indicators={false}>
       
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={image4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={image5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={image6} alt="Sixth slide" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={image7} alt="Sixth slide" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={image8} alt="Sixth slide" />
        </Carousel.Item>
       
      </Carousel> 
      </div>
    
  );
};

export default CarouselContainer;
