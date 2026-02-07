import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from '../assets/banner1.png'
import Images from '../assets/banner2.png' 
import Image3 from '../assets/banner3.png'  
import '../Components/Swiper.css'
const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
    //   slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={Image} alt="Logo" srcset="" /></SwiperSlide>
      <SwiperSlide><img src={Images} alt="Logo" srcset="" /></SwiperSlide>
      <SwiperSlide><img src={Image3} alt="Logo" srcset="" /></SwiperSlide>
      ...
    </Swiper>
  );
};

export default Slider;   