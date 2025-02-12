'use client'
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import projOne from "../public/images/austin-distel-wD1LRb9OeEo-unsplash.jpg";
import projTwo from "../public/images/daniel-korpai-pKRNxEguRgM-unsplash.jpg";
import projThree from "../public/images/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import { animate, stagger, useInView } from "framer-motion";
    type Project={
        
        imgUrl:string,
        title:string,
        year:string,
        description:string,
        id:number

    }

    

const SingleProject = ({project,flexDir}:{project:Project,flexDir:number}) => {

    const ref = useRef(null)
const isInView = useInView(ref,{once:true})

useEffect(()=>{
  const animateServices=async()=>{
    if(isInView){
   
      console.log("visible")
      
     //  const sequence=[['.service',{opacity:[0,1],y:[100,0]},{duration:1,delay:0.5,type:"spring",damping:10,stiffness:100}]]
    //  await animate(".title", {opacity:[0,1] }, {duration:1,delay: 3,type:"spring",damping:10,stiffness:100})
     await animate(ref.current, { x: [flexDir?100:-100, 0],opacity:[0,1] }, {duration:1,delay: 0.2,type:"spring",damping:20,stiffness:100})
     

       
     }else{
       console.log("not visible")
     }
  }
  animateServices()

},[isInView])

  return (
    
    <div ref={ref} className={`flex ${flexDir === 0 ? 'flex-row ' : 'flex-row'} items-center justify-between w-[100%] my-6  `}>




        {/* FOR SMALL SCREENS */}

    <div className={` ${flexDir === 0 ?" ml-4 ":" "}" md:hidden flex flex-col w-[100%] "`}>

      {/* Image */}
      <div style={{backgroundImage:`url(${project.imgUrl} )`, backgroundSize:"cover"}} className="flex h-[180px] w-[100%]  relative   rounded-[1.5vw]  bg-[#D9D9D9] ">
          {/* <Image
            src={imageData}
            alt="project one"
            className="w-[100%] rounded-[1.5vw]"
          /> */}

           {/*  circle */}
           <div className=" absolute bottom-2 left-[5%] flex flex-col items-start justify-center space-y-4 ">
            <div className="bg-[#92DEED] w-10 h-10 rounded-full flex justify-center items-center ">
              <p className="text-[#11112B] font-poppins text-[20px] font-semibold leading-6">
                {project.id}
              </p>
            </div>

            <div className="bg-white h-10 flex flex-col justify-center items-center rounded-[10px] p-2" >
              <h5 className="text-[#11112B] font-Space  text-[20px] font-bold leading-normal  ">
                {project.title}
              </h5>
            </div>


          </div>
        </div>


         

          {/* Description */}
          <div className="flex flex-col items-start w-[100%] gap-y-6  justify-center md:hidden  ">
          <h5 className="mt-6 text-[16px] font-Poppins tracking-[2px] font-[400]">{project.year}</h5>
          <h1 className=" pt-1 text-[18px] text-start font-Poppins font-[300]">
            {" "}
           {project.description}
          </h1>
        </div>

        



        </div>

        {/*  circle */}
        <div className="flex flex-col items-start w-[30%]  justify-between space-y-4 nomd:hidden ">
          <div className="bg-[#92DEED] w-[4vw] h-[4vw] rounded-full flex justify-center items-center ">
            <p className="text-[#11112B] font-poppins text-[20px] font-semibold leading-6">
              {project.id}
            </p>
          </div>

          <div>
            <h5 className="text-[#FFFFFF] text-[44px] font-Space   font-[600] leading-normal  mb-4">
             {project.title}
            </h5>
          </div>
        </div>



        {/* Description */}
        <div className="flex flex-col items-start w-[30%] gap-y-6 flex-shrink-0  justify-center nomd:hidden  ">
          <h5 className="mt-6 text-[16px] font-Poppins tracking-[2px] font-[400]">{project.year}</h5>
          <h1 className=" pt-1 text-[18px] text-start font-Poppins font-[300]">
            {" "}
            {project.description}
          </h1>
        </div>

        {/* Image */}
        <div style={{backgroundImage:`url(${project.imgUrl} )`, backgroundSize:"cover"}} className="flex h-[180px] w-[35%] nomd:w-[60%] nomd:hidden   rounded-[1.5vw]  bg-[#D9D9D9] ">
          {/* <Image
            src={imageData}
            alt="project one"
            className="w-[100%] rounded-[1.5vw]"
          /> */}
        </div>
      </div>
  )
}

export default SingleProject