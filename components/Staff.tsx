import React from "react";
import Image from "next/image";
import phila from "../public/images/phila.jpg";
import raey from "../public/images/raey.jpg";
import goodman from "../public/images/good_man.jpg";
import hanna from "../public/images/hannaIM.jpg";

const staffMembers = [
  { name: "Phylipos Tesfaye", image: phila },
  { name: "Raey Getahun", image: raey },
  { name: "Degesew Ababaw", image: goodman },
  { name: "Hanna Gizachew", image: hanna },
  // Add more staff members here
];

const Staff = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      <div className="py-20 max-w-[1150px] m-auto items-center justify-center px-5% text-[#11112B] mt-10">
        <h3 className="text-center text-[5vw] md:text-[3vw] font-spaceGrotesk font-bold leading-none">
          Our Team
        </h3>
        <p className="text-center text-[3vw] md:text-[1.3vw] font-normal leading-[150%] font-Poppins mt-5 px-4">
          The passionate people behind our every project at Algonix
        </p>
        <div className="grid items-center justify-center md:flex flex-col gap-12 mt-10">
          <div className="grid md:flex flex-row items-center justify-between gap-12">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white w-[70vw] md:w-[17vw] h-[70vw] md:h-[25vw] rounded-3xl shadow-xl relative overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl transition duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="flex flex-col absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-500 items-center justify-center group">
                  <h6 className="text-white text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold leading-tight text-center opacity-0 group-hover:opacity-100 transition-all duration-50">
                    {member.name}
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:flex flex-row items-center justify-between mt-10 gap-12 mb-12">
            {/* Additional staff members can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
