import React from "react";

import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const sliderSettings2 = {
  slidesPerView: 1,
  spaceBetween: 50,
  centeredSlides: true,
  // autoplay: {
  //   delay: 1000,
  // },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 3,
    },
  },
};

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col justify-center  items-center py-8 lg:py-14 gap-3 px-6 md:px-8 lg:px-20 xl:px-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[30px] font-bold text-black">Testimonials</h1>

        <p className="text-[18px] font-medium text-[#636363]">
          What our customer's say
        </p>
      </div>
      <div className=" w-screen relative   flex flex-col justify-center">
        <span className="w-[10%] h-[270px] bg-white/95 blur-2xl z-[1000] absolute top-0 left-0"></span>
        <Swiper
          {...sliderSettings2}
          className="w-full h-full flex flex-col gap-y-12 justify-center"
        >
          <SliderButtons2 />
          <SwiperSlide className="h-full flex justify-center">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center">
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide className="h-full flex justify-center">
            <ReviewCard />
          </SwiperSlide>
        </Swiper>
        <span className="w-[10%] h-[270px] bg-white/95 blur-2xl z-[1000] absolute top-0 right-0"></span>
      </div>
    </div>
  );
};

export default Testimonials;

const SliderButtons2 = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full flex justify-center gap-4">
      <button
        className="w-12 h-12 rounded-full text-[#c00000] border-[3px] font-bold border-[#c00000] text-[14.6px] flex items-center justify-center"
        onClick={() => swiper.slidePrev()}
      >
        <MdOutlineKeyboardArrowLeft className="text-2xl" />
      </button>
      <button
        className="w-12 h-12 rounded-full text-[#c00000] border-[3px] font-bold border-[#c00000] text-[14.6px] flex items-center justify-center"
        onClick={() => swiper.slideNext()}
      >
        <MdOutlineKeyboardArrowRight className="text-2xl" />
      </button>
    </div>
  );
};
