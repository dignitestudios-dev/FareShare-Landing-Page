import React, { useState } from "react";

const HowItWorksCard = ({ title, icon, description }) => {
  return (
    <div className="w-full  group  flex flex-col gap-2 p-5 justify-center items-start bg-white rounded-3xl shadow-md">
      <span className=" flex items-center justify-center ">
        <img src={icon} alt="icon" />
      </span>
      <span className="text-[20px] text-[#c00000]  font-semibold">{title}</span>
      <span className="text-[14px] font-normal text-[#8B8B8B] ">
        {description}
      </span>
    </div>
  );
};

export default HowItWorksCard;
