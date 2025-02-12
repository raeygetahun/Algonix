'use client'
import Image from "next/image";
import arrowIcon from "../public/image/Arrow Icon.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { SlScreenSmartphone } from "react-icons/sl";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props={
  bgColor:string,
  textColor:string,
  content:string,
  title:string,
  icon:any,
  serviceNum:number
  
}

const SingleService=({props}:{props:Props})=>{
const [isHover,setIsHover]=useState(false)




 return (
  <motion.div onMouseEnter={(e)=>{
    setIsHover(true)
   
    }} onMouseLeave={()=>setIsHover(false)}  transition={{duration:0.5}} className={`${ props.bgColor} ${isHover?" p-0 ": " p-[5%] "} "  col-span-1  h-[420px]   flex flex-col justify-between gap-y-16 rounded-[25px] border border-solid backdrop-blur-md"`}>
    {!isHover && props.icon}
  {
   !isHover && <div className="flex flex-col justify-center items-start gap-y-6" >
    <div className={` ${props.textColor} " flex flex-row justify-between space-x-4 items-center "`}>
      <div className="flex flex-col gap-y-4 text-5xl sm:text-4xl md:text-[4vw] font-Space font-bold">
        <span>{props.title.split(' ')[0]}</span>
        <span>{props.title.split(' ')[1]}</span>
      </div>
      
      {/* <HiOutlineArrowSmRight className="text-white text-[9.5vw]" /> */}
    </div>
    <p className="text-white font-Poppins font-[400] text-xl sm:text-lg opacity-70" >{props.content}</p>
    </div>
  }

  {
    isHover && <motion.div initial={{scaleY:0}} animate={{scaleY:1}} transition={{duration:0.5}} style={{originY:props.serviceNum%2==0?0:1, backgroundColor:"#000",backgroundImage: `linear-gradient(rgba(17, 17, 43, 0.5), rgba(17, 17, 43, 0.5)), url(/images/services/web2.jpg)`,backgroundSize:'cover' }} className="relative w-[100%] rounded-[25px] h-[100%] flex flex-col justify-center items-center">
       <motion.div initial={{y:props.serviceNum%2==0?200:-200,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2,duration:0.5}} className=" relative z-10 " >
       <p className="text-white font-Poppins font-[400] text-xl" >some content to  dispalayd</p>
       <p className="text-white font-Poppins font-[400] text-xl" >some content to  dispalayd</p>
       <p className="text-white font-Poppins font-[400] text-xl" >some content to  dispalayd</p>
       <p className="text-white font-Poppins font-[400] text-xl" >some content to  dispalayd</p>
       <p className="text-white font-Poppins font-[400] text-xl" >some content to  dispalayd</p>
       </motion.div>
      <div className="w-32 h-32 bg-red-500 rounded-full flex flex-col justify-center items-center absolute top-[50%] left-[20%] z-0 " >
        <span className=" font-Poppins font-bold text-7xl text-white-100" >0{props.serviceNum}</span>
      </div>

    </motion.div>
  }
</motion.div>
 )
}

const seviceContents=[
  {title:"Web Development",content:"create website that are visualy applealing",bgColor:"bg-gradient-to-b from-white-30 to-white-10 ",textColor:"text-white",icon:  <BsGlobe className=" text-white text-6xl   md:text-[5.5vw]" />
},
  {title:"Mobile Development",content:"Create or enhance mobile applications, ensuring optimized user experience.",bgColor:"bg-gradient-to-b from-white-30 to-white-10 ",textColor:"text-white",icon:  <SlScreenSmartphone className=" text-white text-6xl   md:text-[5.5vw]" />
},
{title:"Cyber Security",content:"Provides advanced protection for your data and systems against threats.",bgColor:"bg-gradient-to-b from-white-30 to-white-10 ",textColor:"text-white",icon:   <AiOutlineSecurityScan className=" text-white text-6xl   md:text-[5.5vw]" />
},

{title:"Cyber Security",content:"Create solutions to help businesses achieve their digital marketing goals.",bgColor:"bg-gradient-to-b from-white-30 to-white-10 ",textColor:"text-white",icon:   <AiOutlineSecurityScan className=" text-white text-6xl   md:text-[5.5vw]" />
},
{title:"Cloud Computing",content:"Provides access to scalable computing resources to optimize their operations.",bgColor:"bg-[#92DEED] ",textColor:"text-white",icon:   <AiOutlineSecurityScan className=" text-white text-6xl   md:text-[5.5vw]" />
},
{title:"Software Development",content:"Provides customized solutions to create and maintain software applications.",bgColor:"bg-gradient-to-b from-white-30 to-white-10 ",textColor:"text-white",icon:   <LiaLaptopCodeSolid className=" text-white text-6xl   md:text-[5.5vw]" />
},



]


const Services = () => {

  // sm:grid-cols-2 sm:grid-rows-3
  return (
    <section className="bg-[#11112B] py-10 px-[5%] mt-14 " style={{
      backgroundImage: `linear-gradient(rgba(17, 17, 43, 0.8), rgba(17, 17, 43, 0.6)), url(/images/services-bg4.jpg)`,
      backgroundSize: "cover",
    }} >

      <div className="flex gap-x-3" >
          <span className="text-white font-Poppins text-lg font-[400]" >Home {'>  '}</span>
          <span className="text-white font-Poppins text-lg font-[600]" >services</span>
      </div>
      <div className=" my-10">
        <p className=" text-5xl md:text-[5vw] font-Space font-bold text-white">Services</p>
      </div>

      <div className="mt-[3vw]   space-y-6 shadow-2xl" >


        <div className="  items-center grid grid-cols-1  sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-6 ">



          {
            seviceContents.map((item,index)=>{
              return <SingleService key={index} props={{...item,serviceNum:index+1}} />
            })
          }
        
         



        </div>
      </div>
    </section>
  );
};

export default Services;
