import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/export";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="home"
      className="w-full h-20 bg-transparent flex justify-between items-center px-6 md:px-8 lg:px-20 xl:px-24"
    >
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>

      <ul className="hidden lg:flex gap-12 items-center justify-center">
        <li className="text-sm tracking-wider font-medium text-gray-800 active">
          <button
            onClick={() => {
              handleClick("home");
            }}
          >
            Home
          </button>
        </li>
        <li className="text-sm tracking-wider font-medium text-gray-800 active">
          <button
            onClick={() => {
              handleClick("services");
            }}
          >
            Services
          </button>
        </li>

        <li className="text-sm tracking-wider font-medium text-gray-800 active">
          <button
            onClick={() => {
              handleClick("about-us");
            }}
          >
            About us
          </button>
        </li>
        <li className="text-sm tracking-wider font-medium text-gray-800 active">
          <button
            onClick={() => {
              handleClick("how-it-works");
            }}
          >
            How it works?
          </button>
        </li>
        <li className="text-sm tracking-wider font-medium text-gray-800 active">
          <button
            onClick={() => {
              handleClick("testimonial");
            }}
          >
            Testimonials
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
