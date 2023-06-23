import React from 'react'
import './CarrouselHome.css'

import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarrouselHome() {    

  var settingsBanner = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settingsBanner} className='col-12 slider' arrows={false}>
        <img src={img1} alt="" className='imgCarrousel' />

        <img src={img2} alt="" className='imgCarrousel' />

        <img src={img3} alt="" className='imgCarrousel' />
    </Slider>
  )
}

export default CarrouselHome