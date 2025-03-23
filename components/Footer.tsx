"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative bg-[#11112B] py-12 md:py-16 px-6 md:px-[8%]">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-10 md:space-y-0">
        
        {/* Logo & Social Media */}
        <div className="flex flex-col items-center md:items-start space-y-5">
          <p className="text-white text-4xl md:text-6xl font-bold">
            Algo<span className="font-light">nix</span>
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="w-8 h-8 text-white hover:text-gray-400 cursor-pointer transition-all" />
            <FaTwitter className="w-8 h-8 text-white hover:text-gray-400 cursor-pointer transition-all" />
            <FaLinkedinIn className="w-8 h-8 text-white hover:text-gray-400 cursor-pointer transition-all" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3 md:space-y-5 text-center md:text-left">
  <p className="text-lg md:text-2xl text-white font-semibold">Explore</p>
  <ul className="text-white text-base md:text-lg opacity-75 space-y-1">
    <li>
      <a href="/about" className="hover:underline cursor-pointer">About Us</a>
    </li>
    <li>
      <a href="/services" className="hover:underline cursor-pointer">Services</a>
    </li>
    {/* <li>
      <a href="/pricing" className="hover:underline cursor-pointer">Pricing</a>
    </li>
    <li>
      <a href="/blog" className="hover:underline cursor-pointer">Blog</a>
    </li> */}
    <li>
      <a href="/contact" className="hover:underline cursor-pointer">Contacts</a>
    </li>
  </ul>
</div>


        {/* Contact Info */}
        <div className="flex flex-col space-y-3 md:space-y-5 text-center md:text-left">
          <p className="text-lg md:text-2xl text-white font-semibold">Contacts</p>
          <ul className="text-white text-base md:text-lg opacity-75 space-y-2">
            <li className="flex items-center gap-2">
              <MdEmail className="text-xl text-[#FFD700]" />
              <span className="opacity-90">sales@algonixtechnologies.com</span>
            </li>
           
            <li className="flex items-center gap-2">
  <MdPhone className="text-xl text-[#FFD700]" />
  <span className="opacity-90">🇩🇪 +49 176 68 969 565</span>
</li>
<li className="flex items-center gap-2">
  <MdPhone className="text-xl text-[#FFD700]" />
  <span className="opacity-90">🇪🇹 +251 923 901 095</span>
</li>

<li className="flex items-center gap-2">
  <MdLocationOn className="text-xl text-[#FFD700]" />
  <span className="opacity-90"> Frankfurt, Germany</span>
</li>
<li className="flex items-center gap-2">
  <MdLocationOn className="text-xl text-[#FFD700]" />
  <span className="opacity-90"> Addis Ababa, Ethiopia</span>
</li>

          </ul>
        </div>

        {/* Newsletter Subscription */}
        {/* <div className="flex flex-col space-y-4 text-center md:text-left">
          <p className="text-lg md:text-2xl text-white font-semibold">Newsletter</p>
          <p className="text-sm md:text-lg text-white opacity-50 max-w-xs md:max-w-sm">
            Subscribe to stay updated on our latest services & products.
          </p>
          <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-black w-full md:w-56"
            />
            <button className="bg-[#FFD700] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#e6c300] transition-all">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="w-full mt-12 mb-5">
        <div className="w-full h-px bg-white opacity-25"></div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-center space-y-4 md:space-y-0">
          <p className="text-white text-sm md:text-base font-light opacity-50">
            Copyright © 2024 Algonix. All rights reserved.
          </p>
          <p className="text-white text-sm md:text-base font-light opacity-50">
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
