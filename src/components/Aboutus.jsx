import React from "react";
import { AboutUsMockup } from "../assets/export";

const Aboutus = () => {
  return (
    <div
      id="about-us"
      className="w-full h-auto grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-2 grid-rows-1 px-6 md:px-8 lg:px-20 xl:px-28 py-6 lg:py-20"
    >
      <img
        src={AboutUsMockup}
        alt="about-us-mockup"
        className="mx-auto lg:mx-0 order-1 px-4"
      />
      <div className="h-full flex flex-col gap-4 justify-center items-start order-1">
        <h2 className="text-[45px] font-bold tracking-tight leading-tight">
          About Us
        </h2>

        <p className="text-md font-normal text-[#454545]">
          At FareShare, our mission is simple: to connect riders with seamless
          transportation options tailored to their needs, whether it's for
          medical appointments, daily commutes, or leisure outings.
          <br />
          <br />
          With years of experience in the transportation industry, we pride
          ourselves on our commitment to excellence, safety, and customer
          satisfaction.
          <br />
          <br />
          Our team of dedicated professionals works tirelessly to ensure that
          every ride with FareShare is not just a journey, but an experience you
          can trust and rely on.
          <br />
          <br />
          Join us on our mission to transform the way people travel, one ride at
          a time. Experience the FareShare difference today.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
