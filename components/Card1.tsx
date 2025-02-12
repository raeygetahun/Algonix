import React from 'react'
import Image from 'next/image'
function Card1() {
  return (
  <div className='relative mt-20 ml-10  flex flex-row pb-60'>
 <Image src="/images/img-map.png" alt="card1" width={700} height={400}
  />
 <div className='bg-[#92DEED] absolute w-[700px] h-[500px] flex-shrink-0 flex flex-col rounded-2xl m-auto  z-40 ml-80 mt-40'>
<h1 className='text-[#11112B] font-space-grotesk  font-bold ml-7 mt-10'>Send Us Message</h1>
<p className='text-white font-poppins text-20 font-normal leading-30 ml-7 mt-4'>Have any questions regarding our services? Send us your message.</p>
<div className='flex items-center justify-between gap-1  mt-10 max-w-[670px]'>
<div className='flex flex-col ml-5'>
      <label  className="text-[#11112B] font-poppins text-24 font-bold leading-32 bt-4">Name</label>
      <input type="text" id="username" placeholder="Enter Your Name ..." name="username" className="h-[50px]  pl-4 pr-20 shadow appearance-none border rounded-xl w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"></input>
    </div>
    <div className='flex flex-col '>
      <label  className="text-[#11112B] font-poppins text-24 font-bold leading-32 bt-4">Email</label>
      <input type="text" id="username" placeholder="Enter Your Email Address ..." name="username" className="h-[50px]  pl-4 pr-20 shadow appearance-none border rounded-xl w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"></input>
    </div>
</div>
<div className='flex flex-col'>
<div className='ml-5 mt-4'>
      <label  className="text-[#11112B] font-poppins text-24 font-bold leading-32 mb-5">Message</label>
      <input type="text" id="username" placeholder="Enter Your Message ..." name="username" className="h-[130px] max-w-[650px] shadow appearance-none border rounded-xl w-full  pt-0 pb-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"></input>
    </div>
</div>
<div className='flex flex-row items-center justify-between gap-2 mt-5'>
   <div className='ml-5 flex flex-row items-center  gap-2'>
    <div className='w-4 h-4 flex-shrink-0 rounded-sm bg-white '>

    </div>
   <p className='text-white font-poppins text-16 font-normal leading-26 max-w-[400px] '>By ticking this box, I am consenting to be sent monthly articles and
promotions through Algonix newsletter</p>
   </div>
  
<div className=''>
<button className='bg-[#11112B] text-white font-poppins text-24 font-bold leading-32 mr-10 px-9 text-center rounded-xl py-4 flex-shrink-0 '>SUBMIT</button>
</div>
</div>


</div>
 </div>

  )
}

export default Card1