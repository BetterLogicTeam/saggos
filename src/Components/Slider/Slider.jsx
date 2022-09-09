// import React from 'react';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <div className="toop">
        <div className="container">
            <div className="row">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="slide_1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="slide_2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="slide_3.webp" alt="" /></SwiperSlide>
      </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Slider