import React from 'react'
import './CarrouselHome.css'

import { Apolo11, Apolo12 } from "../../assets/images/Apolo/index";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarrouselHome() {

  var settingsBanner = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settingsBanner} className='col-12 slider' arrows={false}>
      <img src={Apolo11} alt="" className='imgCarrousel' />

      <img src={Apolo12} alt="" className='imgCarrousel' />
    </Slider>
  )
}

export default CarrouselHome