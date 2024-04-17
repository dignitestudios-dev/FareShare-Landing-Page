import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/export";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="home"
      className="w-full relative h-20 bg-transparent flex justify-between items-center px-6 md:px-8 lg:px-20 xl:px-24"
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="w-40 lg:w-auto" />
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

      <button onClick={() => setOpenNav(true)} className="flex lg:hidden">
        <CiMenuFries className="text-2xl" />
      </button>

      <div
        className={`bg-transparent lg-hidden w-full h-screen z-[1000] fixed top-0 right-0 ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
        onClick={() => setOpenNav(!openNav)}
      >
        <div className="bg-white h-auto w-48 absolute top-16 rounded-2xl right-4 float-end p-4  shadow-2xl">
          <ul className="flex lg:hidden flex-col gap-4 items-start justify-center">
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
      </div>
    </div>
  );
};

export default Navbar;
