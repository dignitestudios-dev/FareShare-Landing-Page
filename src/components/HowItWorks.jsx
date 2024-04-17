import React from "react";
import HowItWorksCard from "./HowItWorksCard";
import { BookRide, TrackRide, RidePrefer, RideSafely } from "../assets/export";

const HowItWorks = () => {
  return (
    <div className="w-full flex flex-col justify-center  items-center py-8 lg:py-14 gap-3 px-6 md:px-8 lg:px-20 xl:px-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[30px] font-bold text-black">How it works</h1>

        <p className="text-[18px] font-medium text-[#636363]">
          Step-by-step guide on using FareShare:
        </p>
      </div>
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2">
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
      </div>
    </div>
  );
};

export default HowItWorks;
