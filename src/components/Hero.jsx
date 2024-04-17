import React from "react";
import { Apple, Google, HeroMockup } from "../assets/export";

const Hero = () => {
  return (
    <div className="w-full h-auto lg:h-[calc(100vh-5rem)] flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center lg:justify-start items-center px-6 md:px-8 lg:px-20 xl:px-24">
      <div className="relative w-full lg:w-1/3  h-full flex flex-col justify-center items-start gap-4 ">
        <div className="flex flex-col gap-2 justify-start items-start static lg:absolute top-1/4 w-full lg:w-[50vw]">
          <h1 className="font-extrabold text-[35px] lg:text-[60px] tracking-tight leading-tight">
            Ride with Confidence,
            <br /> Arrive with Ease
          </h1>
          <p className="text-[#7b7b7b] text-sm font-normal">
            Welcome to FareShare - Your Trusted Companion for Safe and Reliable{" "}
            <br />
            Transportation
          </p>
          <div className="flex flex-col justify-start gap-3 mt-2 lg:mt-6 items-start">
            <h3 className="text-sm font-semibold text-[#7b7b7b] uppercase">
              get our app now
            </h3>
            <div className="w-auto flex gap-3 justify-start items-center">
              <img src={Apple} alt="apple-store-logo" />
              <img src={Google} alt="google-store-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex items-center justify-center h-full">
        <img src={HeroMockup} className="h-auto" />
      </div>
    </div>
  );
};

export default Hero;
