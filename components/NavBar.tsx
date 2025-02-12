'use client'
import Link from "next/link";
import { useState,useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi"
import {MdClose} from "react-icons/md"
import { MotionValue, useMotionValueEvent, useScroll,useTransform,motion, useMotionValue } from "framer-motion";
import { useRouter,usePathname } from 'next/navigation'
import path from "path";

type Props={
  bgColor:string,
  
  
}

const NavBar = () =>{
  // #11112B
const [isOpen, setIsOpen] =useState(false)
const handleClick = () => setIsOpen(!isOpen);


const pathName=usePathname()




const { scrollYProgress ,scrollY} = useScroll();



const bgColor = useTransform(scrollYProgress, [0, 0.1], ['transparent', '#11112B']);
const textColor = useTransform(scrollYProgress, [0, 0.1], ['#11112B', '#fff']);
const op=useTransform(scrollYProgress, [0, 0.1], [1, 0]);

console.log(pathName)
// const textColor =pathName==="/blog" && bgColor.get()=="#11112B" ?"text-[#11112B]":"text-white"

  return (

    <motion.div  style={{ backgroundColor:bgColor,transition: 'background-color 0.5s ease',color:pathName==="/blog"?textColor:"white" }}   className= {` " z-50  flex fixed w-[100%]   items-center justify-between px-10 top-0 left-0   py-5 mb-50" `}>
      <div className="flex text-xl font-bold">Algonix Technologies</div>
      <ul className={` " hidden md:flex  space-x-4 list-none text-md  uppercase   font-[400] font-Poppins cursor-pointer relative"`}>
       
       <Link href="/">
        <li className="relative px-2 group  "> <span className="h-[1.5px] w-0 bg-white absolute left-0 right-0 -bottom-2 group-hover:w-full transition-width ease duration-700">&nbsp;</span> Home</li>
       </Link>
        <Link href="/about">
        <li className="relative px-2 group"> <span className="h-[1.5px] w-0 bg-white absolute left-0 right-0 -bottom-2 group-hover:w-full transition-width ease duration-700">&nbsp;</span> About</li>
        </Link>
        <Link href="/services" >  
        <li className="relative px-2 group"> <span className="h-[1.5px] w-0 bg-white absolute left-0 right-0 -bottom-2 group-hover:w-full transition-width ease duration-700">&nbsp;</span> Services</li>
        </Link>
        <Link href="/blog">
        <li className="relative px-2 group"> <span className="h-[1.5px] w-0 bg-white absolute left-0 right-0 -bottom-2 group-hover:w-full transition-width ease duration-700">&nbsp;</span> Blog</li>
        </Link>
      </ul>
      <div className="hidden md:flex  text-xl font-normal">
      <motion.button style={{borderColor:pathName==="/blog"?textColor:"white"}} className={`  " rounded-[10px]   border-2 w-123 h-58 flex-shrink-0 py-1 px-2 backdrop-filter backdrop-blur-5 hover:text-[#4c9590] transition-colors font-Poppins"`}>Contact Us</motion.button>
      </div>
        <div onClick={handleClick} className='md:hidden'>
        {!isOpen ? <GiHamburgerMenu size={40}  /> : <MdClose size={40} className="text-[#BCA81F] relative z-50"/>}
      </div>
      
      <ul
        className={
          !isOpen
            ? 'hidden'
            : 'md:hidden text-[#11112B] absolute top-0 left-0 w-full h-5% bg-[#92DEED] flex flex-col justify-center items-center z-30  '
        }
      >
        <li className='flex items-center  py-6 text-2xl border-b-2 border-gray-500 w-full '>
        <IoIosArrowForward className="pl-2"/>
          <Link onClick={handleClick} href="/" className="pl-5">
            Home
          </Link>
        </li>
        <li className=' flex items-center  py-6 text-2xl border-b-2 border-gray-500 w-full'>
          {' '}
          <IoIosArrowForward className="pl-2"/>
          <Link onClick={handleClick} href="/" className="pl-5">
            About
          </Link>
        </li>
        <li className='flex items-center  py-6 text-2xl border-b-2 border-gray-500 w-full '>
          {' '}
          <IoIosArrowForward className="pl-2"/>
          <Link onClick={handleClick} href="/" className="pl-5">
            Services
          </Link>
        </li>
        <li className='flex items-center  py-6 text-2xl border-b-2 border-gray-500 w-full '>
          {' '}
          <IoIosArrowForward className="pl-2"/>
          <Link onClick={handleClick} href="/" className="pl-5">
            Blogs
          </Link>
        </li>
        <li className='flex items-center  py-6 text-2xl border-b-2 border-gray-500 w-full '>
          {' '}
          <IoIosArrowForward className="pl-2"/>
          <Link onClick={handleClick} href="/" className="pl-5">
            Contact US
          </Link>
        </li>
      </ul>

    </motion.div>
  );
};

export default NavBar;
