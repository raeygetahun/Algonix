import React from "react";
import Image from "next/image";
import charli from "../public/images/phila.jpg";
import staff from "../public/images/raey.jpg";
import staff1 from "../public/images/good_man.jpg";
// import staff2 from '../public/images/staff2.jpg'
// import staff3 from '../public/images/staff3.jpg'
// import staff4 from '../public/images/staff4.jpg'
const Staff = () => {
  return (
    <div className="bg-white">
      <div className="bg-white py-20 max-w-[1150px] m-auto items-center justify-center px-5% px-auto text-white mt-10">
        <h3 className="text-center text-[#11112B] text-[7vw] nommd:text-[21vw] font-spaceGrotesk font-bold leading-none">
          Our Team
        </h3>
        <p className="text-center text-[#11112B] text-[1.3vw] nomd:text-[5vw] font-normal leading-[150%] font-Poppins mt-5 px-4">
          The passionate people behind our every projects in Algonix
        </p>
        <div className=" grid items-center justify-center  md:flex flex-col gap-12  mt-10">
          <div className="grid md:flex flex-row items-center justify-between gap-12 ">
            <div className="r bg-white w-[17vw] nomd:w-[70vw] h-[25vw] nomd:h-[70vw]  rounded-3xl shadow-2xl shadow-black relative">
              <Image
                src={charli}
                alt="expertise"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl transition duration-500 ease-in-out transform hover:scale-105"
              />
              <div className="flex flex-col absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-500  items-center justify-center group">
                {/* <p className=" text-white font-poppins text-base font-normal leading-7 opacity-0 group-hover:opacity-100 transition-all duration-50">CEO & Founde</p> */}
                <h6 className="text-white text-4xl font-poppins font-semibold leading-10 opacity-0 group-hover:opacity-100 transition-all duration-50">
                  Philopos Tesfaye
                </h6>
              </div>
            </div>

            <div className="bg-white w-[17vw] nomd:w-[70vw] h-[25vw] nomd:h-[70vw]  rounded-3xl shadow-2xl shadow-black relative ">
              <Image
                src={staff}
                alt="expertise"
                layout="fill"
                objectFit="cover"
                className="absolute rounded-3xl transition duration-500 ease-in-out transform hover:scale-105"
              />
              <div className="flex flex-col absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-500  items-center justify-center group">
                {/* <p className=" text-white font-poppins text-base font-normal leading-7 opacity-0 group-hover:opacity-100 transition-all duration-50">CEO & Founde</p> */}
                <h6 className="text-white text-4xl font-poppins font-semibold leading-10 opacity-0 group-hover:opacity-100 transition-all duration-50">
                  Raey Getahun
                </h6>
              </div>
            </div>

            <div className="bg-white w-[17vw] nomd:w-[70vw]  h-[25vw] nomd:h-[70vw]  rounded-3xl shadow-2xl shadow-black relative">
              <Image
                src={staff1}
                alt="expertise"
                layout="fill"
                objectFit="cover"
                className="absolute rounded-3xl transition duration-500 ease-in-out transform hover:scale-105"
              />
              <div className="flex flex-col absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-500  items-center justify-center group">
                {/* <p className=" text-white font-poppins text-base font-normal leading-7 opacity-0 group-hover:opacity-100 transition-all duration-50">CEO & Founde</p> */}
                <h6 className="text-white text-4xl font-poppins font-semibold leading-10 opacity-0 group-hover:opacity-100 transition-all duration-50">
                  Degesew
                </h6>
              </div>
            </div>
          </div>

          <div className="grid md:flex flex-row items-center justify-between mt-10 gap-12 mb-12">
            {/* <div className="bg-white w-[20vw] nomd:w-[70vw] h-[20vw] nomd:h-[70vw] rounded-3xl shadow-2xl shadow-black relative"> */}
              {/* <Image src={staff2} alt="expertise" layout="fill" objectFit="cover" className="absolute rounded-3xl transition duration-500 ease-in-out transform hover:scale-105" /> */}
              {/* <div className="flex flex-col absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-500  items-center justify-center group"> */}
                {/* <p className=" text-white font-poppins text-base font-normal leading-7 opacity-0 group-hover:opacity-100 transition-all duration-50">CEO & Founde</p> */}
                {/* <h6 className="text-white text-4xl font-poppins font-semibold leading-10 opacity-0 group-hover:opacity-100 transition-all duration-50">
                  Nazrawi Demeke
                </h6> */}
              {/* </div> */}
            {/* </div> */}

            {/* <div className='bg-white w-[20vw] nomd:w-[70vw]  h-[20vw] nomd:h-[70vw]  rounded-3xl shadow-2xl shadow-black relative'> 
  <Image src={staff3} alt="expertise" layout="fill" objectFit="cover" className="absolute rounded-3xl transition duration-500 ease-in-out transform hover:scale-105" />
  <div className="flex flex-col absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-500  items-center justify-center group">
    <p className=" text-white font-poppins text-base font-normal leading-7 opacity-0 group-hover:opacity-100 transition-all duration-50">CEO & Founde</p>
    <h6 className='text-white text-4xl font-poppins font-semibold leading-10 opacity-0 group-hover:opacity-100 transition-all duration-50'>Robert Kang</h6>
  </div> */}
            {/* </div> */}

            {/* <div className='bg-white w-[20vw] nomd:w-[70vw] h-[20vw] nomd:h-[70vw] rounded-3xl shadow-2xl shadow-black relative'> 
  <Image src={staff4} alt="expertise" layout="fill" objectFit="cover" className="absolute rounded-3xl transition duration-500 ease-in-out transform hover:scale-105" />
  <div className="flex flex-col absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-500  items-center justify-center group">
    <p className=" text-white font-poppins text-base font-normal leading-7 opacity-0 group-hover:opacity-100 transition-all duration-50">CEO & Founde</p>
    <h6 className='text-white text-4xl font-poppins font-semibold leading-10 opacity-0 group-hover:opacity-100 transition-all duration-50'>Robert Kang</h6>
  </div>
  </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
