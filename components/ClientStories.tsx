"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import clientOne from "../public/images/client-one.jpg";
import clientTwo from "../public/images/client-two.jpg";
import clientThree from "../public/images/client-three.jpg";
import { SiSamsung } from "react-icons/si";
import { SiAmazongames } from "react-icons/si";
import { FaWindows } from "react-icons/fa6";
import { SiSony } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useAnimate, usePresence, motion } from "framer-motion";
import Client from "./Client";

const ClientStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();
  const [toLeft, setToLeft] = useState(false);
  const animateToRight = async () => {
    await animate(
      ".client",
      { x: [0, 500]},
      { type: "tween", duration: 0.5 }
    );
  };

  const animateToLeft = async () => {
    await animate(
      ".client",
      { x: [0, -500]},
      { type: "tween", duration: 0.5 }
    );
  };

  const clients = [
    {
      title: "Amazing!",
      testimonial:
        '"Working with Algonix has been a game-changer for our business. Their expertise allowed us to scale our operations quickly and efficiently, and their personalized approach ensured that we got what we need."',
      name: "Daniel",
      position: "CEO of RAM Trucking Group",
      image: clientOne,
      id:"id1"
    },
    {
      title: "Great!",
      testimonial:
        " “We were struggling to keep up with the demands of our growing business until we partnered with Algonix. Their custom software development solution has helped us streamline our operations and improve efficiency, saving us time and money.”",
      name: "Dr. Katja",
      position: "Director of Overbeck Musuem",
      image: clientTwo,
      id:"id2"
    },
    {
      title: "Wonderfull!",
      testimonial:
        " “We were struggling to keep up with the demands of our growing business until we partnered with Algonix. Their custom software development solution has helped us streamline our operations and improve efficiency, saving us time and money.”",
      name: "Stephen",
      position: "CEO of Dani Health Services",
      image: clientThree,
      id:"id3"
    },
  ];

  const currentClients = [
    clients[currentIndex % clients.length],
    clients[(currentIndex + 1) % clients.length],
  ];

  return (
    <section className="bg-[#11112B] flex flex-col  px-[5%] py-[8%] ">
      <div className="flex flex-col items-center justify-between  ">
        {/* title */}
        <div className="flex flex-row justify-between items-center w-[100%]">
          <p className=" font-Space text-[5vw] text-white">Client Stories</p>
          {/* <HiOutlineArrowSmRight className="text-white text-[5.5vw]" /> */}
        </div>

        {/* clients row */}
        <div
          ref={scope}
          className="flex flex-row justify-center items-center w-[100%] "
        >
          {/* arrow back */}
          <IoIosArrowBack
            className= "relative z-50 text-white text-[5.5vw] hover:cursor-pointer hover:text-[#8ccf86]"
            onClick={() => {
              setToLeft(true);
              const lastClient = clients.pop();
              clients.unshift(lastClient!);
              setCurrentIndex(
                (currentIndex + clients.length - 1) % clients.length
              );
              // animateToLeft();
            }}
          />

          {/* clients */}
          {currentClients.map(
            (client, index) =>
              index < 1 && (
                <Client
                  id={client.id}
                  
                  toLeft={toLeft}
                  title={client.title}
                  name={client.name}
                  testimonial={client.testimonial}
                  position={client.position}
                  
                />
              )
          )}

          {/*  arrow forward */}
          <IoIosArrowForward
            className=" relative z-50 text-white text-[5.5vw] hover:cursor-pointer hover:text-[#8ccf86]"
            onClick={() => {
              setToLeft(false);
              setCurrentIndex(currentIndex + 1);

              // animateToRight();
            }}
          />
        </div>

        

        {/* Companies
        <div className="flex flex-row justify-between w-[100%] mt-[7vw] ">
          <SiSamsung className="text-white text-[7.5vw]" />
          <SiAmazongames className="text-white text-[7.5vw]" />
          <FaWindows className="text-white text-[7.5vw]" />
          <SiSony className="text-white text-[7.5vw]" />
        </div> */}
      </div>
    </section>
  );
};

export default ClientStories;

