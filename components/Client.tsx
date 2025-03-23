import { FaUserAlt } from "react-icons/fa"; // Importing the user icon from react-icons
import { motion, useAnimate, useInView, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  testimonial: string;
  name: string;
  position: string;
  toLeft: boolean;
  id: string;
}

const Client = ({
  title,
  testimonial,
  name,
  position,
  toLeft,
  id,
}: Props) => {
  return (
    <div className="relative z-0 flex flex-col justify-between gap-y-14 items-center client w-[65vw] nomd:w-[80vw] mx-auto mt-8">
      {/* title of testimonial */}
      <div className="flex flex-col items-start space-y-[1.5vw] w-[70%] text-white relative z-0">
        <p className="text-[#92DEED] font-Space text-[3vw] nomd:text-[4vw]">{title}</p>
        <p className="nomd:text-[2.8vw] text-[1.8vw] text-gray-300">{testimonial}</p>
      </div>

      {/* image and name */}
      <div className="flex flex-row justify-end items-center space-x-4 relative z-0">
        <div className="flex flex-col justify-center items-end text-white">
          <p className="font-Poppins text nomd:text-[2vw] text-[1.5vw] font-bold">
            {name}
          </p>
          <p className="font-Poppins text nomd:text-[1.8vw] text-[1.3vw]">
            {position}
          </p>
        </div>

        {/* Avatar Image replaced with React Icon */}
        <FaUserAlt className="w-[5vw] h-[5vw] text-white" /> {/* Replace image with the user icon */}
      </div>
    </div>
  );
};

export default Client;



