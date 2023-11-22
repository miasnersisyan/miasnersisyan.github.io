

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { memo } from 'react'
import './style.css'
export default memo(function AboutSwiper({sliderArr}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <Slider {...settings}>
            {
                sliderArr.map((elm) => {
                 return <img src={elm.src} className ='about-slide-img' alt={elm.slide} />
                })
            }
        
          </Slider>
         );
},(prevProps,nextProps) => {
  if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
   return true
  }else{
   return false
  }
})