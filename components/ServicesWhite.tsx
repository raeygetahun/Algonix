'use client';
import React, { useEffect, useRef } from "react";
import SinglService from "./SinglService";
import { BsGlobe } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion, useTime, useTransform,useAnimate, stagger, useInView, animate, } from "framer-motion";
import { useRouter } from 'next/navigation'


      
    

// variants={containerVariants} whileInView="visible"


const ServicesWhite = () => {
  const router = useRouter();

  const ref = useRef(null)
const isInView = useInView(ref,{once:true})

useEffect(()=>{
  const animateServices=async()=>{
    if(isInView){
   
      console.log("visible")
      
     //  const sequence=[['.service',{opacity:[0,1],y:[100,0]},{duration:1,delay:0.5,type:"spring",damping:10,stiffness:100}]]
    //  await animate(".title", {opacity:[0,1] }, {duration:1,delay: 3,type:"spring",damping:10,stiffness:100})
     await animate(".service", { y: [100, 0],opacity:[0,1] }, {duration:1,delay: stagger(0.2,{from:'last'}),type:"spring",damping:10,stiffness:100})
     

       
     }else{
       console.log("not visible")
     }
  }
  animateServices()

},[isInView])
  return (
    <section ref={ref}   className="p-[10%] bg-[#D5D9E5]" style={{ backgroundImage: `url(/images/white-bg1.jpg)`,backgroundSize: 'cover' }} >
      <div className="flex flex-row justify-around space-x-6 items-center">
        {/* FIRST COLUMN */}
        <div   className="flex flex-col justify-center gap-y-8 items-center">
         
         
          <div  
            className={`nomd:w-[90%] service p-8 w-[25vw] bg-gradient-to-t from-white  to-white-10 col-span-1 nomd:space-y-14 flex-shrink-0  rounded-[25px] border border-solid  backdrop-blur-md`}
          >
            <div className="flex flex-row justify-between items-center">
              <BsGlobe className=" text-[4.5vw]" />
              {/* <HiOutlineArrowSmRight
                className={`text-[#11112B] text-[4.5vw]`}
              /> */}
            </div>

            <div className={`text-[]  flex flex-col text-[3vw]  font-Space `}>
              <span>Web</span>
              <span>Development</span>
            </div>
          </div>

          <div 
            className={`nomd:w-[90%] service p-8 w-[25vw]  from-white bg-[#11112B]  to-white-10 col-span-1 nomd:space-y-14 flex-shrink-0  rounded-[25px] border border-solid  backdrop-blur-md`}
          >
            <div className="flex flex-row justify-between items-center">
              <SlScreenSmartphone className="text-white text-[4.5vw]" />
              <HiOutlineArrowSmRight
                className={`text-[white] text-[4.5vw]`}
              />
            </div>

            <div className={`text-[white]  flex flex-col text-[3vw]  font-Space `}>
              <span>Mobile</span>
              <span>Development</span>
            </div>
          </div>

          <div  
            className={`nomd:w-[90%] service p-8 w-[25vw] bg-gradient-to-t from-white  to-white-10 col-span-1 nomd:space-y-14 flex-shrink-0  rounded-[25px] border border-solid  backdrop-blur-md`}
          >
            <div className="flex flex-row justify-between items-center">
              <AiOutlineSecurityScan className=" text-[4.5vw]" />
              {/* <HiOutlineArrowSmRight
                className={`text-[#11112B] text-[4.5vw]`}
              /> */}
            </div>

            <div className={`text-[#11112B]  flex flex-col text-[3vw]  font-Space `}>
              <span>Cyber</span>
              <span>Security</span>
            </div>
          </div>
        </div>
        {/* SECOND COLUMN */}
        <div className="flex flex-col justify-center gap-y-8 items-center">
          <div 
            className={`transform transition duration-500 hover:scale-105 active:bg-blue-500 nomd:w-[90%] service p-8 w-[25vw] bg-gradient-to-t from-white  to-white-10 col-span-1 nomd:space-y-14 flex-shrink-0  rounded-[25px] border border-solid  backdrop-blur-md`}
          >
            <div className="flex flex-row justify-between items-center">
              <AiOutlineSecurityScan className=" text-[4.5vw]" />
              {/* <HiOutlineArrowSmRight
                className={`text-[#11112B] text-[4.5vw]`}
              /> */}
            </div>

            <div className={`text-[#11112B]  flex flex-col text-[3vw]  font-Space `}>
              <span>Cloud</span>
              <span>Computing</span>
            </div>
          </div>

          <div 
            className={`nomd:w-[90%] service p-8 w-[25vw] bg-gradient-to-t from-white  to-white-10 col-span-1 nomd:space-y-14 flex-shrink-0  rounded-[25px] border border-solid  backdrop-blur-md`}
          >
            <div className="flex flex-row justify-between items-center">
              <AiOutlineSecurityScan className=" text-[4.5vw]" />
              {/* <HiOutlineArrowSmRight
                className={`text-[#11112B] text-[4.5vw]`}
              /> */}
            </div>

            <div className={`text-[#11112B]  flex flex-col text-[3vw]  font-Space `}>
              <span>Digital</span>
              <span>Marketing</span>
            </div>
          </div>

          {/* services */}
        <div  className="md:hidden service">
            <p className="text-[5vw] font-Space text-[#11112B]">Services</p>
            <p className="text-[#11112B)] font-Poppins text-[1.2vw]">
              We provide customized solutions that meet our clients' unique
              needs and help them succeed in an increasingly digital world.
            </p>

            <div className="btn-grad flex flex-row justify-between px-[5%] items-center w-[25vw] h-[6vw] rounded-[1vw] mt-[3vw]   border-[1px] border-[#11112B]">
              <span className=" font-Poppins font-[600] whitespace-nowrap text-[2.2vw]">
                Learn more
              </span>
              {/* <FaArrowRight className="w-[200px] h-[30px]"/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8vw"
                height="16"
                viewBox="0 0 101 16"
                fill="none"
              >
                <path
                  d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0L0 9Z"
                  fill="#11112B"
                />
              </svg>
            </div>
          </div>
        </div>



        {/* Third COLUMN */}

        <div className="nomd:hidden flex flex-col justify-center gap-y-8 items-center">
          <div  className=" ml-8 service">
            <p className="text-[5vw] font-Space text-[#11112B]">Services</p>
            <motion.p initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} className="text-[#11112B)] font-motion.poppins text-[1.2vw]">
              We provide customized solutions that meet our clients' unique
              needs and help them succeed in an increasingly digital world.
            </motion.p>

            <div className="btn-grad hover:cursor-pointer flex flex-row justify-between px-[5%] nomd:w-[40vw] nomd:h-[8vw] items-center w-[20vw] h-[4vw] rounded-[10px] mt-[3vw]   border-[1px] border-[white] bg-[#11112B]">
            <button
              onClick={() => router.push('/services')}
              className="flex flex-row items-center"
      >
                <span className=" font-Poppins whitespace-nowrap  pr-8 text-white font-[600] nomd:text-[2.8vw] text-[1.3vw]">
                  Learn More
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
                </button>

              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhite;
