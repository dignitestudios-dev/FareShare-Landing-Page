import React from "react";

const Benefits = () => {
  return (
    <div className="w-full h-auto lg:h-60 border-y-2 border-gray-400  flex flex-col lg:flex-row gap-2 py-4 lg:py-0 lg:gap-4 justify-center lg:justify-start items-start lg:items-center px-6 md:px-8 lg:px-20 xl:px-24 ">
      <div className="w-full justify-center items-center lg:w-1/4 lg:justify-start">
        <h1 className="text-[30px] font-bold text-black">Benefits of App</h1>
      </div>
      <div className="w-3/4 lg:w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 lg:grid-cols-4 ">
        <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
          <h3 className="text-black text-[20px] font-semibold">
            Safe and Reliable
          </h3>
          <p className="text-md font-medium text-[#545454]">
            Trustworthy drivers and vehicles for your peace of mind
          </p>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
          <h3 className="text-black text-[20px] font-semibold">
            Convenient Booking
          </h3>
          <p className="text-md font-medium text-[#545454]">
            Easily schedule rides or request on-demand transportation
          </p>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
          <h3 className="text-black text-[20px] font-semibold">
            Cost-Effective
          </h3>
          <p className="text-md font-medium text-[#545454]">
            Competitive pricing and insurance-covered options available
          </p>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
          <h3 className="text-black text-[20px] font-semibold">Rewards</h3>
          <p className="text-md font-medium text-[#545454]">
            Earn points and rewards for every ride you take
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
