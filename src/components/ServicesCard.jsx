import React, { useState } from "react";

const ServicesCard = ({ title, icon, white_icon, description }) => {
  const [image, setImage] = useState(icon);

  return (
    <div
      onMouseOver={() => {
        setImage(white_icon);
      }}
      onMouseOut={() => {
        setImage(icon);
      }}
      className="w-full xl:w-[297px] h-[247px] group hover:bg-[#c00000] flex flex-col gap-2 p-5 justify-center items-start bg-white rounded-3xl shadow-md"
    >
      <span className="w-[70px] h-[70px] rounded-full flex items-center justify-center group-hover:bg-[#FFFFFF]/[0.15] bg-[#c00000]/[0.05]">
        <img src={image} alt="icon" />
      </span>
      <span className="text-[24px] text-[#c00000] group-hover:text-white font-semibold">
        {title}
      </span>
      <span className="text-[15px] font-normal text-[#8B8B8B] group-hover:text-gray-100">
        {description}
      </span>
    </div>
  );
};

export default ServicesCard;
