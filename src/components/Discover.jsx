import React from "react";
import { DiscoverMockup } from "../assets/export";

const Discover = () => {
  return (
    <div className="w-full flex flex-col justify-center text-white discover-bg items-center pt-8 pb-5 lg:pb-8 lg:pt-14 gap-5 px-6 md:px-8 lg:px-20 xl:px-24">
      <h1 className="text-center text-[24px] font-semibold leading-tight tracking-tight">
        Discover FareShare - Your Ultimate Destination for <br /> Seamless
        Transportation Solutions
      </h1>
      <span className="text-[16px] font-semibold text-center leading-tight tracking-tight">
        Book NEMT rides, Schedule in advance, Enjoy on-demand rides, Wheelchair
        Accessible Rides, and Earn rewards!
      </span>

      <img src={DiscoverMockup} alt="discover-mockup" />
    </div>
  );
};

export default Discover;
