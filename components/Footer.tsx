"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useTime, useTransform } from "framer-motion";

const Footer = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <section className="relative  bg-[#11112B]  py-[5%]">
      {/* <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="absolute top-[25%] right-[30%] w-[30px] h-[30px] bg-[#D9D9D9] z-0"
      />

      <motion.div
        animate={{
          x: [0, 200, -200, 0],
          backgroundColor: ["#D9D9D9", "#11112B", "#D9D9D9", "#11112B"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="absolute top-[50%] left-[20%] w-[50px] h-[50px] bg-[#D9D9D9] z-0"
      />

      <motion.div
        animate={{
          scale: [1, 0.5, 0.5, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="absolute top-[60%] right-[20%] w-[30px] h-[30px] bg-[#D9D9D9] z-0"
      /> */}

      <div className="flex flex-col  space-y-2 absolute top-[20%] z-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100vw"
          height="300"
          viewBox="0 0 1920 379"
          fill="none"
          className="absolute top-0"
        >
          <path
            d="M-909.816 13.9912C-904.725 149.688 -786.781 262.396 -655.163 295.745C-523.546 329.094 -383.477 297.17 -258.206 244.799C-132.934 192.428 -16.8003 120.124 108.312 67.411C233.424 14.698 373.186 -18.0469 505.082 14.1799C665.041 53.2771 786.734 179.517 928.833 262.757C1152.81 394.001 1438.35 414.319 1678.63 316.096C1802.48 265.477 1926.36 161.598 1920.33 27.8742"
            stroke="gray"
            stroke-width="0.85"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100vw"
          height="300"
          viewBox="0 0 1920 379"
          fill="none"
          className="absolute top-4"
        >
          <path
            d="M-895.745 13.9637C-890.654 149.661 -772.709 262.369 -641.092 295.718C-509.475 329.067 -369.406 297.142 -244.134 244.772C-118.863 192.401 -2.72922 120.097 122.383 67.3835C247.495 14.6704 387.257 -18.0745 519.153 14.1524C679.112 53.2496 800.805 179.489 942.904 262.73C1166.88 393.973 1452.42 414.291 1692.7 316.068C1816.55 265.449 1940.44 161.57 1934.4 27.8466"
            stroke="gray"
            stroke-width="0.85"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100vw"
          height="300"
          viewBox="0 0 1920 379"
          fill="none"
          className="absolute top-12"
        >
          <path
            d="M-881.674 13.9361C-876.583 149.633 -758.639 262.341 -627.021 295.69C-495.404 329.039 -355.335 297.115 -230.064 244.744C-104.792 192.373 11.3415 120.069 136.454 67.3559C261.566 14.6428 401.328 -18.1021 533.224 14.1248C693.183 53.222 814.876 179.462 956.975 262.702C1180.95 393.946 1466.5 414.264 1706.77 316.04C1830.62 265.422 1954.51 161.543 1948.48 27.8191"
            stroke="gray"
            stroke-width="0.85"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100vw"
          height="300"
          viewBox="0 0 1920 379"
          fill="none"
          className="absolute top-[80px]"
        >
          <path
            d="M-867.636 13.914C-862.544 149.611 -744.6 262.319 -612.983 295.668C-481.366 329.017 -341.296 297.093 -216.025 244.722C-90.7538 192.351 25.3802 120.047 150.492 67.3339C275.605 14.6208 415.366 -18.1241 547.262 14.1028C707.222 53.2 828.915 179.44 971.014 262.68C1194.99 393.924 1480.53 414.242 1720.81 316.018C1844.66 265.399 1968.54 161.521 1962.51 27.797"
            stroke="gray"
            stroke-width="0.85"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className=" px-[5%]  flex flex-col justify-between items-center text-center">
        <div className="text center flex flex-col justify-between items-center nomd:py-[30%] relative z-10">
          <div className="text-center">
            <p className=" text-[7vw] nomd:text-[9vw] font-Space text-white">
              Need IT Solution?
            </p>
            <p>
              <span className=" text-[7vw] nomd:text-[9vw] font-Space text-white">
                Let's{" "}
              </span>{" "}
              <span className=" text-[7vw] nomd:text-[9vw] font-Poppins font-[300] italic text-white">
                start now.
              </span>
            </p>
            {/* middle button */}
            <div className="text-center flex flex-col justify-center items-center">
              <div className="btn-grad hover:cursor-pointer flex flex-row justify-between px-[5%] nomd:w-[40vw] nomd:h-[8vw] items-center w-[20vw] h-[4vw] rounded-[10px] mt-[3vw]   border-[1px] border-[white] bg-[#11112B]">
                <span className=" font-Poppins whitespace-nowrap  pr-8 text-white font-[600] nomd:text-[2.8vw] text-[1.3vw]">
                  Get Free
                </span>
                {/* <FaArrowRight className="w-[200px] h-[30px]"/> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="16"
                  viewBox="0 0 101 16"
                  fill="none"
                >
                  <path
                    d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0L0 9Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-start  w-[100%] md:mt-[10vw]  relative z-10">
          {/* first colomn */}
          <div className="flex flex-col justify-between items-center h-[15vw]">
            <p>
              <span className=" font-Space text-white font-[600] nomd:text-[6vw] text-[4vw]">
                WAVE
              </span>
              <span className=" font-Poppins text-white font-[200]  nomd:text-[6vw] text-[4vw] ">
                NET
              </span>
            </p>
            {/* social media */}
            <div className="flex flex-row w-[20vw] justify-around items-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
              >
                <g clip-path="url(#clip0_49_102)">
                  <path
                    d="M32.25 0H10.75C4.83803 0 0 4.72346 0 10.5V31.5C0 37.2745 4.83803 42 10.75 42H32.25C38.162 42 43 37.2745 43 31.5V10.5C43 4.72346 38.162 0 32.25 0ZM21.5 29.7497C16.5517 29.7497 12.5415 25.831 12.5415 21C12.5415 16.1668 16.5517 12.2498 21.5 12.2498C26.4461 12.2498 30.4585 16.1668 30.4585 21C30.4585 25.831 26.4461 29.7497 21.5 29.7497ZM33.146 12.2498C31.6603 12.2498 30.4585 11.0743 30.4585 9.62483C30.4585 8.17534 31.6603 6.99983 33.146 6.99983C34.6317 6.99983 35.8335 8.17534 35.8335 9.62483C35.8335 11.0743 34.6317 12.2498 33.146 12.2498Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_49_102">
                    <rect width="43" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M19.392 26.4957C19.248 26.4957 16.08 26.4957 14.64 26.4957C13.872 26.4957 13.632 26.2077 13.632 25.4877C13.632 23.5677 13.632 21.5997 13.632 19.6797C13.632 18.9117 13.92 18.6717 14.64 18.6717H19.392C19.392 18.5277 19.392 15.7437 19.392 14.4477C19.392 12.5277 19.728 10.7037 20.688 9.02366C21.696 7.29566 23.136 6.14366 24.96 5.47166C26.16 5.03966 27.36 4.84766 28.656 4.84766H33.36C34.032 4.84766 34.32 5.13566 34.32 5.80766V11.2797C34.32 11.9517 34.032 12.2397 33.36 12.2397C32.064 12.2397 30.768 12.2397 29.472 12.2877C28.176 12.2877 27.504 12.9117 27.504 14.2557C27.456 15.6957 27.504 17.0877 27.504 18.5757H33.072C33.84 18.5757 34.128 18.8637 34.128 19.6317V25.4397C34.128 26.2077 33.888 26.4477 33.072 26.4477C31.344 26.4477 27.648 26.4477 27.504 26.4477V42.0957C27.504 42.9117 27.264 43.1997 26.4 43.1997C24.384 43.1997 22.416 43.1997 20.4 43.1997C19.68 43.1997 19.392 42.9117 19.392 42.1917C19.392 37.1517 19.392 26.6397 19.392 26.4957Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_49_106)">
                  <path
                    d="M40 7.5975C38.5125 8.25 36.9275 8.6825 35.275 8.8925C36.975 7.8775 38.2725 6.2825 38.8825 4.36C37.2975 5.305 35.5475 5.9725 33.6825 6.345C32.1775 4.7425 30.0325 3.75 27.6925 3.75C23.1525 3.75 19.4975 7.435 19.4975 11.9525C19.4975 12.6025 19.5525 13.2275 19.6875 13.8225C12.87 13.49 6.8375 10.2225 2.785 5.245C2.0775 6.4725 1.6625 7.8775 1.6625 9.39C1.6625 12.23 3.125 14.7475 5.305 16.205C3.9875 16.18 2.695 15.7975 1.6 15.195C1.6 15.22 1.6 15.2525 1.6 15.285C1.6 19.27 4.4425 22.58 8.17 23.3425C7.5025 23.525 6.775 23.6125 6.02 23.6125C5.495 23.6125 4.965 23.5825 4.4675 23.4725C5.53 26.72 8.545 29.1075 12.13 29.185C9.34 31.3675 5.7975 32.6825 1.9625 32.6825C1.29 32.6825 0.645 32.6525 0 32.57C3.6325 34.9125 7.9375 36.25 12.58 36.25C27.67 36.25 35.92 23.75 35.92 12.915C35.92 12.5525 35.9075 12.2025 35.89 11.855C37.5175 10.7 38.885 9.2575 40 7.5975Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_49_106">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* second colomn */}
          <div className="flex flex-col justify-between items-start">
            <p className=" font-Poppins text-[2vw] nomd:text-[3vw] text-white">
              Explore
            </p>
            <p className=" font-Poppins text-[1vw] nomd:text-[2vw] text-white opacity-[0.75]">
              About Us
            </p>
            <p className=" font-Poppins text-[1vw] nomd:text-[2vw] text-white opacity-[0.75]">
              Services
            </p>
            <p className=" font-Poppins text-[1vw] nomd:text-[2vw] text-white opacity-[0.75]">
              Pricing
            </p>
            <p className=" font-Poppins text-[1vw] nomd:text-[2vw] text-white opacity-[0.75]">
              Blog
            </p>
            <p className=" font-Poppins text-[1vw] nomd:text-[2vw] text-white opacity-[0.75]">
              Contacts
            </p>
          </div>
          {/* third colomn */}
          <div className="flex flex-col justify-between items-start">
            <p className=" font-Poppins text-[2vw] nomd:text-[3vw] text-white">
              Contacts
            </p>
            <p className=" font-Poppins text-[1vw] nomd:text-[2vw] text-white opacity-[0.75]">
              Email
            </p>
            <p className=" font-Poppins text-[1vw] nomd:text-[2vw] text-white opacity-[0.75]">
              Phone
            </p>
            <p className=" font-Poppins text-[1vw] nomd:text-[2vw] text-white opacity-[0.75]">
              Address
            </p>
            <p className=" font-Poppins text-[1vw] nomd:text-[2vw] text-white opacity-[0.75]">
              Social Media
            </p>
          </div>
          {/* fourth column */}
          <div className="flex flex-col justify-between items-start">
            <p className=" font-Poppins text-[2vw] nomd:text-[3vw] text-white">
              News Letter
            </p>
            <p className=" font-Poppins text-[1.2vw] max-w-[20vw] nomd:text-[2vw] opacity-50 text-white">
              Subscribe to our newsletter to stay informed about our latest
              products, service.
            </p>

            <div className=" hover:cursor-pointer flex flex-row justify-between px-[5%] nomd:w-[30vw] nomd:h-[8vw] items-center w-[20vw] h-[4vw] rounded-[5px] mt-[3vw]   border-[1px] border-[white] bg-[#11112B]">
              <span className=" font-Poppins whitespace-nowrap  pr-8 text-white font-[400]  opacity-50 nomd:text-[2.8vw] text-[1.3vw]">
                Learn more
              </span>
              <FaArrowRight className="w-[200px] h-[30px] text-white" />
            </div>
          </div>
        </div>

        <div className=" flex  flex-col w-[100%]  mt-[4vw]  ">
          {/* line */}
          <div className="w-[100%] h-px bg-[#fff]"></div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-white font-Poppins nomd:text-[2vw] font-[400] opacity-50">
              Copyright © 2023 for Algonix. All rights reserved.
            </p>
            <p className="text-white font-Poppins nomd:text-[2vw] font-[400] opacity-50 ">
              Terms & Condition | Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
