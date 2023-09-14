

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AboutSwiper({sliderArr}){
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
}

export default AboutSwiper
