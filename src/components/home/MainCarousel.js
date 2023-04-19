import React from 'react';
import Slider from 'react-slick';

import { carouselImagesPath } from './HomePageConstants';

function MainCarousel() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderCarouselImages = () => carouselImagesPath.map((imagePath, index) => (
    <img src={require('../../assets/images/maxresdefault.jpg')} className={`home-carousel-image carousel-${index}`} key={index} />
  ));
  return (
    <div className="opt-carousel-container">
      <Slider {...carouselSettings}>
        {renderCarouselImages()}
      </Slider>
    </div>
  );
}

export default MainCarousel;
