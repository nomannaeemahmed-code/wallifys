import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "../assets/banner1.webp";
import Images from "../assets/banner2.webp";
import Image3 from "../assets/banner3.webp";

import "../Components/Swiper.css";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src={Image} alt="Banner 1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Images} loading="lazy" alt="Banner 2" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Image3} loading="lazy" alt="Banner 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
