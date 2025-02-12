'use client'
import React from 'react'
import clientOne from '../../public/images/client-one.jpg'
import Image from 'next/image'
import heroImg from '../../public/images/hero-bg1.jpg'
import { FaRegHeart } from "react-icons/fa";


 const intro="For small businesses, the ability to access enterprise-level technology has long been a challenge. Historically, small businesses have had limited access to the resources needed to compete with larger companies. However, cloud computing has changed the game for small businesses, providing access to affordable, scalable technology solutions that were previously out of reach. One of the biggest advantages of cloud computing for small businesses is the cost savings. By moving their IT infrastructure to the cloud, businesses can avoid the upfront costs associated with purchasing and maintaining physical servers and hardware. Cloud computing also eliminates the need for in-house IT staff, reducing labor costs."

 const detail= "In addition to cost savings, cloud computing also provides small businesses with greater flexibility and scalability. With cloud-based solutions, businesses can easily add or remove users, applications, and services as needed, without having to invest in additional hardware or software."


 const summary="In summary, cloud computing is a game-changer for small businesses, providing access to affordable, scalable, and secure technology solutions that were previously out of reach. By moving their IT infrastructure to the cloud, small businesses can reduce costs, increase flexibility, and stay competitive in today's fast-paced business environment."



const Blog = () => {
  const [show, setShow] = React.useState(false)
   
  return (
    <div className='bg-white rounded-[25px] ' >
        <div style={{backgroundImage:`url('/images/hero-bg1.jpg')`,backgroundSize:'cover'}} className="flex flex-col justify-end p-[3%] rounded-t-[25px] h-[300px] ">
            {/* <Image src={heroImg} alt="hero" className='w-[100%]  rounded-t-[25px] ' /> */}

            {/* Blog tags */}
            <div className='flex justify-start gap-x-4 items-center  font-Poppins text-base font-semibold' >
              <div className='bg-[#11112B] text-[white] rounded-[10px] flex-shrink-0  p-3  flex flex-col justify-center items-center' >
                Design

              </div>
              <div className='bg-[#11112B] text-[white] rounded-[10px] flex-shrink-0 p-3  flex flex-col justify-center items-center' >
                Development

              </div>
            </div>
        </div>

        {/* Blog content */}
        <div className='p-[3%] flex flex-col items-start gap-y-4' >
          <h2 className=' text-[28px] font-Poppins font-semibold leading-[1.25]' >Digital Marketing Strategies for Small Businesses</h2>
          <p className='text-[#11112B] opacity-75 text-[18px] font-Poppins leading-[1.2]' > {show ? intro : intro.split(' ').slice(0, 25).join(' ') +"..."} </p>
        
         {show && (
         <><p className='text-[#11112B] opacity-75 text-[18px] font-Poppins leading-[1.2]'>{detail}</p><p className='text-[#11112B] opacity-75 text-[18px] font-Poppins leading-[1.2]'>{summary}</p>
         <span onClick={()=>setShow(false)} className='text-[#7f0000] opacity-100 text-[16px] font-Space hover:cursor-pointer hover:text-[#cc0000]'>{!show?"":"  ...less"}</span>
         <div className='flex justify-start items-center gap-x-4' >
              <p className='text-[#11112B] font-Poppins text-[18px] font-[600] ' >Read More</p>
              <p className='text-[#11112B] font-Poppins text-[18px] font-[600] ' >→</p> 
              </div>

         </>

         
         )
          }

          <span onClick={()=>setShow(true)} className='text-[#7f0000] opacity-100 -mt-4 text-[16px] font-Space hover:cursor-pointer hover:text-[#cc0000]'>{!show?"...more":""}</span>
            
            


          {/* Writer and likes */}
          <div className='flex justify-between w-[100%] items-center' >

            {/* Writer */}
            <div className='flex justify-center gap-x-4  items-center'>
            <Image src={clientOne} alt="blg writer" className='w-16 h-16 rounded-full' />
            <div className='flex flex-col justify-center items-center' >
              <p className=' font-Poppins text-[#11112B] text-[16px] font-semibold' >John Doe</p>
              <p className=' font-Poppins text-[#11112B] text-[16px] font-normal opacity-50'>April 20, 2021</p>
            </div>

            </div>
              
              {/* Likes */}

              <div className='flex items-center justify-center opacity-50 gap-x-4' >
              <FaRegHeart className="text-[28px]" />
              <p className='text-[20px]' >12</p>

              </div>
            

          </div>
        </div>
        
    </div>
  )
}

export default Blog