import Aboutus1 from '@/components/Aboutus1'
import Evidence from '@/components/Evidence'
// import NavBar from '@/components/NavBar'
import Whywechoose from '@/components/whychoose'
import React from 'react'

// #11112B
const page = () => {
  return (
    <div className='bg-[#11112B] overflow-hidden'>
      {/* <NavBar/> */}
<Aboutus1/>
<Whywechoose props={{bgColor:"#D5D9E5",textColor:"#11112B",svgFill:"#11112B"}} />
{/* <Evidence/> */}
    </div>
  )
}

export default page
