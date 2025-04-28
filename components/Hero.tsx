"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import heroImg from "../public/images/hero-img5.jpg";
import Image from "next/image";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [scope, animate] = useAnimate();
  const buttonRef = useRef(null);
  const parsRef =useRef(null)
  const isInView = useInView(scope);
  // await animate(
  //   ".parTwo",
  //   { x:[600,0]},
  //   { delay: 0.2, duration: 0.5 }
  // )

  useEffect(()=>{
     const animatepars = async () => {
      await Promise.all([
        animate(".parOne", { opacity:[0,1], x: [-600, 0] }, { delay: 0, duration: 0.8 }),
        animate(".parTwo", { opacity:[0,1], x: [600, 0] }, { delay: 0, duration: 0.8 }),

        
      ]);
       
      await animate(".parThree",{opacity:[0,1],y:[100,0]},{ delay: 0, duration: 0.5 })
      //  await animate(".button",{opacity:[0,1],x:[-900,0]},{ delay: 0, duration: 5.5,type:"spring",ease:"easeOut" })
       
      

     }

     animatepars()
  },[])

  useEffect(() => {
    const animateSvgs = async () => {
      await animate(
        "path",
        { opacity: 0.1 },
        // { delay: stagger(0.4), duration: 0.5 }
      );
       

    };
    // animateSvgs();
  }, []);



  return (
    <div
    ref={scope}
      className=" relative  bg-[#11112B]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(17, 17, 43, 0.4), rgba(17, 17, 43, 1)), url(/images/hero/hero-bg6.jpg)`,
        backgroundSize: "cover",
      }}
    >
      
      <div
       
        className="flex flex-col  absolute top-[55%] z-0  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100vw"
          height="300"
          viewBox="0 0 1920 379"
          fill="none"
          className="absolute top-2 opacity-60"
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
          className="absolute top-[2rem] opacity-60 "
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
          className="absolute top-[3.5rem] opacity-60"
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
          className="absolute top-[5rem] opacity-60 "
        >
          <path
            d="M-867.636 13.914C-862.544 149.611 -744.6 262.319 -612.983 295.668C-481.366 329.017 -341.296 297.093 -216.025 244.722C-90.7538 192.351 25.3802 120.047 150.492 67.3339C275.605 14.6208 415.366 -18.1241 547.262 14.1028C707.222 53.2 828.915 179.44 971.014 262.68C1194.99 393.924 1480.53 414.242 1720.81 316.018C1844.66 265.399 1968.54 161.521 1962.51 27.797"
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
          className="absolute top-[6.5rem] opacity-60"
        >
          <path
            d="M-853.565 13.8865C-848.473 149.584 -730.529 262.292 -598.912 295.641C-467.295 328.989 -327.225 297.065 -201.954 244.694C-76.6827 192.324 39.4511 120.019 164.563 67.3063C289.676 14.5932 429.437 -18.1517 561.333 14.0752C721.293 53.1724 842.986 179.412 985.084 262.653C1209.06 393.896 1494.61 414.214 1734.88 315.991C1858.73 265.372 1982.62 161.493 1976.58 27.7694"
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
          className="absolute top-[8rem] opacity-60"
        >
          <path
            d="M-839.499 13.8262C-834.408 149.523 -716.464 262.231 -584.847 295.58C-453.229 328.929 -313.16 297.005 -187.889 244.634C-62.6175 192.263 53.5163 119.959 178.629 67.2461C303.741 14.533 443.503 -18.2119 575.399 14.0149C735.358 53.1121 857.051 179.352 999.15 262.592C1223.12 393.836 1508.67 414.154 1748.94 315.931C1872.8 265.312 1996.68 161.433 1990.65 27.7092"
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
          className="absolute top-[9.5rem] opacity-60"
        >
          <path
            d="M-825.428 13.7986C-820.337 149.496 -702.393 262.204 -570.776 295.553C-439.158 328.902 -299.089 296.977 -173.818 244.607C-48.5465 192.236 67.5872 119.932 192.699 67.2185C317.812 14.5054 457.573 -18.2395 589.47 13.9874C749.429 53.0846 871.122 179.324 1013.22 262.565C1237.19 393.808 1522.74 414.126 1763.01 315.903C1886.87 265.284 2010.75 161.405 2004.72 27.6816"
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
          className="absolute top-[11rem] opacity-60"
        >
          <path
            d="M-811.39 13.7766C-806.298 149.474 -688.354 262.182 -556.737 295.531C-425.12 328.88 -285.05 296.955 -159.779 244.585C-34.5079 192.214 81.6259 119.909 206.738 67.1964C331.85 14.4834 471.612 -18.2615 603.508 13.9653C763.467 53.0625 885.16 179.302 1027.26 262.543C1251.23 393.786 1536.78 414.104 1777.05 315.881C1900.91 265.262 2024.79 161.383 2018.76 27.6596"
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
          className="absolute top-[12.5rem] opacity-60"
        >
          <path
            d="M-797.319 13.7491C-792.228 149.446 -674.284 262.154 -542.666 295.503C-411.049 328.852 -270.98 296.928 -145.708 244.557C-20.4372 192.186 95.6966 119.882 220.809 67.1689C345.921 14.4559 485.683 -18.2891 617.579 13.9378C777.538 53.035 899.231 179.275 1041.33 262.515C1265.3 393.759 1550.85 414.077 1791.12 315.853C1914.98 265.235 2038.86 161.356 2032.83 27.632"
            stroke="gray"
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
          className="absolute top-[14rem] opacity-60"
        >
          <path
            d="M-783.253 13.6889C-778.162 149.386 -660.218 262.094 -528.601 295.443C-396.984 328.792 -256.914 296.868 -131.643 244.497C-6.37173 192.126 109.762 119.822 234.874 67.1087C359.986 14.3956 499.748 -18.3493 631.644 13.8775C791.604 52.9747 913.297 179.214 1055.4 262.455C1279.37 393.698 1564.92 414.017 1805.19 315.793C1929.05 265.174 2052.93 161.296 2046.9 27.5718"
            stroke="gray"
            stroke-width="0.85"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div
  ref={parsRef}
  className="text-white relative pt-[30%] sm:pt-[20%] md:pt-[8%] gap-y-8 flex flex-col px-6 sm:px-[5%]"
>
  {/* Title Section */}
  <div className="flex flex-col justify-center items-center text-center">
    <div className="flex flex-col items-center justify-center leading-[1.1] font-Space text-[12vw] sm:text-[10vw] md:text-[6vw] font-bold">
      <p className="py-0 parOne opacity-0 mt-6">
        <span className="bg-[#92DEED] text-transparent bg-clip-text">Algonix </span>
        <span
          style={{
            background: `linear-gradient(97deg, #92DEED 30.1%, #FFF 74.6%)`,
            backgroundClip: "text",
          }}
          className="text-transparent bg-clip-text"
        >
          Technologies
        </span>
      </p>

      {/* Wider "TECH OUTSOURCING PARTNER" text */}
      <p className="parTwo opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-Poppins font-light italic pt-4 w-[95%] sm:w-[90%] md:w-[80%] leading-[1.3] text-center">
  {/* TECH OUTSOURCING PARTNER */}
Your Tech Partner
</p>

    </div>

    {/* Description */}
    <p className="parThree opacity-0 flex items-center justify-center text-white text-center font-Poppins w-[90%] sm:w-[80%] md:w-[60%] px-4 font-normal leading-7 sm:leading-8 text-base sm:text-lg md:text-xl lg:text-2xl mt-6 mb-12">
      <span className="font-[400]">
        From custom software development to AI system and cybersecurity, our team of experts is dedicated to delivering solutions tailored to your unique needs.
      </span>
    </p>
  </div>

  {/* Button Section */}
  {/* <div className="flex justify-center items-center button opacity-0">
    <button className="w-[180px] sm:w-[220px] md:w-[250px] h-[50px] sm:h-[60px] md:h-[70px] btn-grad flex items-center justify-center text-center text-sm sm:text-lg md:text-xl border-white border-2 flex-shrink-0 backdrop-filter backdrop-blur-md text-[#219ebc] py-2 px-4 sm:px-6 rounded-full">
      EXPLORE NOW
      <span className="pl-3">
        <FaArrowRight size={18} />
      </span>
    </button>
  </div> */}
</div>
    </div>
  );
};

export default Hero;
