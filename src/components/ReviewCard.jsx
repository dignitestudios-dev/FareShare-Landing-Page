import React from "react";
import { ReviewImage } from "../assets/export";

const ReviewCard = ({ image, author, review }) => {
  return (
    <div className="w-[581px] h-[250px] bg-white flex flex-col justify-between py-10 custom-shadow px-10 gap-4">
      <p className="font-normal text-sm text-justify">{review}</p>
      <div className="flex items-center gap-4">
        <img src={image} alt="" className="block w-14 h-14" />
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold">{author}</p>
          <p className="text-xs text-[#9E9E9E] font-normal">Customer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
