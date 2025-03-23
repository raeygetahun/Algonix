'use client'
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useTransform, useMotionValue, useInView, animate } from "framer-motion";



interface CounterProps {
  id: string;
  labelText: string;
  num:number;
  channge:number
}


const Counter = ({ id, labelText,num,channge }:CounterProps) => {
  const counter = useMotionValue(0);
  const counterDisplay = useTransform(counter, value => Math.floor(value));
  const ref1=useRef(null)
  const ref2=useRef(null)
  const isInView = useInView(ref1)
  

  const startCounter = async() => {
    await animate(counter,num,{duration:2})
    await animate(ref2.current,{opacity:1,y:[100,0]},{duration:1})
    
  };

  useEffect(()=>{
    if(isInView){

      startCounter()
    }
   
  },[isInView])

  return (
    <div   >
      <AnimatePresence>
        <div className="flex justify-center items-center text-center  text-[5vw] font-bold  font-Space text-[#11112B]">
        <motion.div ref={ref1}
         className=""
          key={counterDisplay.get()}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          {counterDisplay} 
        </motion.div>
        <span>+</span>
        </div>
        <p ref={ref2} className=" opacity-0 font-Poppins nomd:text-[3vw] text-[1.3vw] ">
        {labelText}
      </p>
      </AnimatePresence>
    </div>
  );
};

  

  


const letterVariants = (index:number) => ({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: (index * 0.1)/2,
      
      
    }
  }
});

const pargVariants={
  hidden:{
    opacity:0,
    y:10
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      delay:1,
      duration:0.5,
      
    }
  }
}

const Motto = () => {
  

 

  const titleOne="We believe technology"
  const titleTwo=""
  return (
    <section className="bg-[#D5D9E5] text-center" style={{ backgroundImage: `url(/images/white-bg3.jpg)`,backgroundSize: 'cover' }}>
      <div className="flex flex-col justify-center items-center text-center py-[10vw] ">
       

<motion.div
  className=" w-10 h-10 bg-orange-500 rounded-full "
  initial={{ x: -200, rotate: -360 }}
  whileInView={{ x: 200, rotate: 0,opacity:0 }}
  transition={{ duration: 2, type: "spring",delay:0.1, bounce: 0.25,clump:false }}
/>
<p className="text-[6vw]   text-[#11112B] ">
  

  
    {
      titleOne.split('').map((letter:string,index)=><motion.span
        className={`${index>9? " font-Poppins italic font-[300]":" font-Space font-bold "} `}
        initial="hidden"
        whileInView="visible"
        variants={letterVariants(index)}
        
      >
        {letter}
      </motion.span>)
    }
  
   
  
  {/* ... repeat for each letter ... */}
</p>

        <motion.p initial="hidden" whileInView="visible" variants={pargVariants}  className="font-Space text-[6vw] text-[#11112B] font-bold ">
          <span>can </span>
           <span className={`change text-[#D5D9E5] text-[6vw]   `}>change</span>
          <span> the world.</span>
        </motion.p>

        <div className="flex flex-col justify-center items-center text-center mt-20 px-[20%]">
          <p className=" text-center  text-slate-900 nomd:text-[3.5vw] text-[1.3vw]  font-Poppins ">
          At our tech company, we are committed to delivering cutting-edge solutions that empower businesses of all sizes. Our team of skilled professionals is dedicated to driving innovation, optimizing efficiency, and helping you thrive in an ever-evolving digital world
          </p>
        </div>

        <div   className="flex flex-row items-center space-x-4 mx-[3vw]  p-[1vw] mt-20">
          <Counter id="countProjects" labelText="Successful Projects" num={10} channge={10} />
          <div className="w-[20vw] h-px bg-white"></div>
          <Counter id="countClients" labelText="Satisfied Clients" num={7} channge={3} />
          <div className="w-[20vw] h-px bg-white"></div>
          <Counter id="countCountries" labelText="Handled Countries" num={5} channge={2} />
        </div>
      </div>
    </section>
  );
};

export default Motto;
