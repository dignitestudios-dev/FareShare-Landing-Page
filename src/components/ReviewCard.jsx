import React from "react";
import { ReviewImage } from "../assets/export";

const ReviewCard = () => {
  return (
    <div className="w-[581px] h-[250px] shadow-lg bg-white flex flex-col justify-center px-6 gap-4">
      <p className="font-normal text-sm text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex items-center gap-4">
        <img src={ReviewImage} alt="" className="block w-14 h-14" />
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold">Olivia James</p>
          <p className="text-xs text-[#9E9E9E] font-normal">Customer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
