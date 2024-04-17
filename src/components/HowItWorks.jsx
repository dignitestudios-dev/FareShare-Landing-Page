import React from "react";
import HowItWorksCard from "./HowItWorksCard";
import {
  BookRide,
  TrackRide,
  RidePrefer,
  RideSafely,
  How1,
  How2,
  How3,
} from "../assets/export";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const sliderSettings2 = {
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,

  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
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

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="w-full relative flex flex-col justify-center  items-center py-8 lg:py-14 gap-3 lg:gap-6 px-6 md:px-8 lg:px-20 xl:px-24"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[30px] font-bold text-black">How it works</h1>

        <p className="text-[18px] font-medium text-[#636363]">
          Step-by-step guide on using FareShare:
        </p>
      </div>
      <div className="w-full  h-auto grid grid-cols-1 gap-8 lg:gap-8 lg:grid-cols-2">
        <div className="w-full h-auto grid grid-cols-2 gap-4 grid-rows-2">
          <HowItWorksCard
            title={"Book Your Ride"}
            description={"Choose your destination and preferred ride type"}
            icon={BookRide}
          />
          <HowItWorksCard
            title={"Track Your Ride"}
            description={"Follow your driver's progress in real-time"}
            icon={TrackRide}
          />
          <HowItWorksCard
            title={"Select Your Options"}
            description={"Customize your ride preferences and payment method"}
            icon={RidePrefer}
          />
          <HowItWorksCard
            title={"Arrive Safely"}
            description={
              "Reach your destination hassle-free and enjoy the journey"
            }
            icon={RideSafely}
          />
        </div>
        <div className=" flex flex-col justify-center">
          <Swiper
            {...sliderSettings2}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full h-full relative flex flex-col gap-y-12 justify-center"
          >
            {/* <SliderButtons2 /> */}
            <SwiperSlide className="h-full flex justify-center">
              <img src={How1} alt="how-it-works-images" />
            </SwiperSlide>
            <SwiperSlide className="h-full flex justify-center">
              <img src={How2} alt="how-it-works-images" />
            </SwiperSlide>
            <SwiperSlide className="h-full flex justify-center">
              <img src={How1} alt="how-it-works-images" />
            </SwiperSlide>
            <SwiperSlide className="h-full flex justify-center">
              <img src={How3} alt="how-it-works-images" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

const SliderButtons2 = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full absolute bottom-0 left-[40%] z-[1000] flex justify-center gap-4">
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
