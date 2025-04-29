"use client";
import React, { useRef } from "react";
import { BsGlobe } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { AiOutlineRobot } from "react-icons/ai";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FaRobot } from "react-icons/fa"; // Updated import

const ServicesWhite = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="p-6 md:p-[5%] bg-[#D5D9E5] min-h-screen flex items-center"
      style={{
        backgroundImage: `url(/images/white-bg1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-around items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
        {/* FIRST COLUMN */}
        <div className="flex flex-col gap-y-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 items-center">
          <div className="service p-6 md:p-8 w-full bg-white rounded-2xl border border-gray-300 backdrop-blur-md shadow-lg">
            <div className="flex justify-between items-center">
              <FaRobot className="text-5xl text-[#11112B]" />
            </div>
            <div className="flex flex-col text-2xl font-semibold text-[#11112B]">
              <span>Artificial</span>
              <span>Intelligence</span>
            </div>
          </div>
          <div className="service p-6 md:p-8 w-full bg-white rounded-2xl border border-gray-300 backdrop-blur-md shadow-lg">
            <div className="flex justify-between items-center">
              <BsGlobe className="text-5xl text-[#11112B]" />
            </div>
            <div className="flex flex-col text-2xl font-semibold text-[#11112B]">
              <span>Web</span>
              <span>Development</span>
            </div>
          </div>

          <div className="service p-6 md:p-8 w-full bg-[#11112B] text-white rounded-2xl border border-gray-300 backdrop-blur-md shadow-lg">
            <div className="flex justify-between items-center">
              <SlScreenSmartphone className="text-5xl" />
              <HiOutlineArrowSmRight className="text-5xl" />
            </div>
            <div className="flex flex-col text-2xl font-semibold">
              <span>Mobile</span>
              <span>Development</span>
            </div>
          </div>

          <div className="service p-6 md:p-8 w-full bg-white rounded-2xl border border-gray-300 backdrop-blur-md shadow-lg">
            <div className="flex justify-between items-center">
              <AiOutlineSecurityScan className="text-5xl text-[#11112B]" />
            </div>
            <div className="flex flex-col text-2xl font-semibold text-[#11112B]">
              <span>Cyber</span>
              <span>Security</span>
            </div>
          </div>
        </div>

        {/* SECOND COLUMN */}
        <div className="flex flex-col gap-y-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 items-center">
          <div className="service p-6 md:p-8 w-full bg-white rounded-2xl border border-gray-300 backdrop-blur-md shadow-lg">
            <div className="flex justify-between items-center">
              <RiLightbulbFlashLine className="text-5xl text-[#11112B]" />
            </div>
            <div className="flex flex-col text-2xl font-semibold text-[#11112B]">
              <span>AI Consulting</span>
            </div>
          </div>
          <div className="service p-6 md:p-8 w-full bg-white rounded-2xl border border-gray-300 backdrop-blur-md shadow-lg">
            <div className="flex justify-between items-center">
              <AiOutlineSecurityScan className="text-5xl text-[#11112B]" />
            </div>
            <div className="flex flex-col text-2xl font-semibold text-[#11112B]">
              <span>Content Management System</span>
            </div>
          </div>

          <div className="service p-6 md:p-8 w-full bg-white rounded-2xl border border-gray-300 backdrop-blur-md shadow-lg">
            <div className="flex justify-between items-center">
              <AiOutlineSecurityScan className="text-5xl text-[#11112B]" />
            </div>
            <div className="flex flex-col text-2xl font-semibold text-[#11112B]">
              <span>E-commerce Solutions</span>
            </div>
          </div>

          {/* SERVICES TEXT & BUTTON */}
          <div className="text-center px-6 md:px-0">
            <p className="text-4xl font-bold text-[#11112B]">Services</p>
            <p className="text-[#11112B] font-medium text-lg md:text-xl mt-2">
              We provide customized solutions to meet our clients' unique needs
              and help them succeed in an increasingly digital world.
            </p>
            {/* <button className="bg-[#11112B] text-white px-6 py-3 rounded-lg mt-4 text-lg font-semibold hover:bg-[#22224A] transition duration-300">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhite;
