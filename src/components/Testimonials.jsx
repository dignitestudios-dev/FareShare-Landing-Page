import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col justify-center  items-center py-8 lg:py-14 gap-3 px-6 md:px-8 lg:px-20 xl:px-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[30px] font-bold text-black">Testimonials</h1>

        <p className="text-[18px] font-medium text-[#636363]">
          What our customer's say
        </p>
      </div>
      <div className="w-[98vw] bg-black h-36 "></div>
    </div>
  );
};

export default Testimonials;
