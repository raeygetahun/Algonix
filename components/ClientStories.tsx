"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Client from "./Client";

// Define TypeScript types
interface ClientProps {
  id: string;
  title: string;
  name: string;
  testimonial: string;
  position: string;
  avatar: string;
  rating: number;
}

const ClientStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [toLeft, setToLeft] = useState<boolean>(false);

  // Client data with avatar images and 5-star ratings
  const clients: ClientProps[] = [
    {
      title: "Amazing!",
      testimonial:
        '"Working with Algonix has been a game-changer for our business. Their expertise allowed us to scale our operations quickly and efficiently, and their personalized approach ensured that we got what we need."',
      name: "Daniel",
      position: "CEO of RAM Trucking Group",
      avatar: "/path-to-avatar1.jpg",
      id: "id1",
      rating: 5,
    },
    {
      title: "Great!",
      testimonial:
        "We were struggling to keep up with the demands of our growing business until we partnered with Algonix. Their custom software development solution has helped us streamline our operations and improve efficiency, saving us time and money.",
      name: "Dr. Katja",
      position: "Director of Overbeck Museum",
      avatar: "/path-to-avatar2.jpg",
      id: "id2",
      rating: 5,
    },
    {
      title: "Wonderful!",
      testimonial:
        "We were struggling to keep up with the demands of our growing business until we partnered with Algonix. Their custom software development solution has helped us streamline our operations and improve efficiency, saving us time and money.",
      name: "Stephen",
      position: "CEO of Dani Health Services",
      avatar: "/path-to-avatar3.jpg",
      id: "id3",
      rating: 5,
    },
  ];

  const currentClients: ClientProps[] = [
    clients[currentIndex % clients.length],
    clients[(currentIndex + 1) % clients.length],
  ];
  // Function to render stars
  const renderStars = (rating: number): JSX.Element[] => {
    return [...Array(5)].map((_, index) => (
      <FaStar key={index} className={index < rating ? "text-yellow-400" : "text-gray-400"} />
    ));
  };

  return (
    <section className="bg-[#11112B] flex flex-col px-[5%] py-[8%]">
      <div className="flex flex-col items-center justify-between">
        {/* Title */}
        <div className="flex flex-row justify-between items-center w-[100%]">
          <p className="font-Space text-[5vw] text-white">Client Stories</p>
        </div>

        {/* Clients Row */}
        <div className="flex flex-row justify-center items-center w-[100%] relative">
          {/* Arrow Back */}
          <IoIosArrowBack
            className="absolute left-0 text-white text-[5.5vw] hover:cursor-pointer hover:text-[#8ccf86]"
            onClick={() => {
              setToLeft(true);
              setCurrentIndex((currentIndex + clients.length - 1) % clients.length);
            }}
          />

          {/* Clients */}
          <motion.div
            key={currentClients[0].id}
            className="client flex flex-col items-center w-[60%] max-w-[800px] text-center mx-auto"
            initial={{ opacity: 0, x: toLeft ? 100 : -700 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: toLeft ? -100 : 100 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {/* Client Component */}
            <Client
              id={currentClients[0].id}
              title={currentClients[0].title}
              name={currentClients[0].name}
              testimonial={currentClients[0].testimonial}
              position={currentClients[0].position}
              toLeft={toLeft}  // Just keep the toLeft prop
            />

            {/* Rating */}
            <div className="flex mt-2">{renderStars(currentClients[0].rating)}</div>
          </motion.div>

          {/* Arrow Forward */}
          <IoIosArrowForward
            className="absolute right-0 text-white text-[5.5vw] hover:cursor-pointer hover:text-[#8ccf86]"
            onClick={() => {
              setToLeft(false);
              setCurrentIndex(currentIndex + 1);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ClientStories;

