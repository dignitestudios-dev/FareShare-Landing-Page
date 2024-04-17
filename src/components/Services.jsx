import React from "react";
import { Ambulance, AmbulanceWhite, Car, CarWhite } from "../assets/export";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const arr = [
    {
      icon: Ambulance,
      white_icon: AmbulanceWhite,
      title: "NEMT Rides",
      description:
        "Secure transportation for medical appointments covered by insurance.",
    },
    {
      icon: Car,
      white_icon: CarWhite,
      title: "Scheduled Rides",
      description: "Plan your trips in advance for peace of mind.",
    },
    {
      icon: Ambulance,
      white_icon: AmbulanceWhite,
      title: "On-Demand Rides",
      description: "Instant transportation at your fingertips",
    },
    {
      icon: Car,
      white_icon: CarWhite,
      title: "Wheelchair Accessible Rides",
      description: "Accommodating passengers with diverse mobility needs",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center  items-center py-8 lg:py-14 gap-6 px-6 md:px-8 lg:px-20 xl:px-24">
      <h1 className="text-[30px] font-bold text-black">Services</h1>

      <div className="w-full h-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 grid-rows-1">
        {arr?.map((service, key) => {
          return (
            <ServicesCard
              key={key}
              title={service?.title}
              description={service?.description}
              white_icon={service?.white_icon}
              icon={service?.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
