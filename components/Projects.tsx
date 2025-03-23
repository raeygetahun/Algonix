'use client'
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import projOne from "../public/images/austin-distel-wD1LRb9OeEo-unsplash.jpg";
import projTwo from "../public/images/daniel-korpai-pKRNxEguRgM-unsplash.jpg";
import projThree from "../public/images/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import SingleProject from "./SingleProject";
import {motion, useMotionValue} from 'framer-motion'
import Faq from "./Faq";



type Project={
        
  imgUrl:string,
  title:string,
  year:string,
  description:string,
  id:number

}

const projects:Project[]=[

  {
    imgUrl:'/images/projects/projects1.jpg',
    title:"RAM Tracking Group",
    year:"2024",
    description:"RAM Tracking Group, a logistics company, needed a custom software solution to improve their operations. We deliver a satisfying software development.",
    id:1
  },
  {
    imgUrl:'/images/projects/projects2.jpg',
    title:"Dani Health Services",
    year:"2023",
    description:"Dani Health Services partnered with Algonix to streamline their operations and improve efficiency through a custom software development solution. This collaboration helped them save time and money while meeting the demands of their growing business.",
    id:2
  },
  {
    imgUrl:'/images/projects/projects3.jpg',
    title:"DEF Manufacture",
    year:"2020",
    description:"DEF Manufacturing needed a custom software solution to improve their production efficiency. We deliver a satisfying software development.",
    id:3
  },
  
  
  

]

const Projects = () => {
  const x=useMotionValue(0)

  return (
    <main className=" text-white relative w-screen p-[5%]  ">
      {/* Tilete */}

      <div className="flex  justify-between w-[100%] items-start  pt-7 pb-6 ">
        <h3 className="flex justify-center items-start  text-white text-[6vw] font-Space leading-8">
          Projects
        </h3>
        {/* Button */}
        {/* <div className="btn-grad flex items-center justify-center text-center nomd:w-[30vw] nomd:h-[10vw] w-[20vw] h-[4vw]   rounded-lg border border-white bg-dark-blue">
=          <button className="  flex items-center justify-center text-[1.3vw] nomd:text-[3vw]">
            EXPLORE NOW{" "}
            <span className="pl-4 flex-shrink-0">
              <FaArrowRight width={100} />
            </span>
          </button>

        </div> */}
      </div>

      
     <div className="flex flex-col justify-center items-center gap-y-10" >
      {projects.map((project,index)=>{
        return(
          <><SingleProject project={project} flexDir={index % 2} key={project.id} /><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: '100%' }} style={{ originX: 0 }} transition={{ duration: 1, delay: 0.5 }} className="w-[100%] h-px bg-gray-500"></motion.div></>
        )
      })}
     </div>

     <Faq/>
      
    </main>
  );
};

export default Projects;
