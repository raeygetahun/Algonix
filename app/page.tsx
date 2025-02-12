
import Motto from '@/components/Motto'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Image from 'next/image'
import ClientStories from '@/components/ClientStories'
import ServicesWhite from '@/components/ServicesWhite'
import Projects from '@/components/Projects'
import Staff from '@/components/Staff'
import Whywechoose from '@/components/whychoose'



// 92DEED

export default function Home() {
  

  
  return (
    <main className='bg-[#11112B] overflow-hidden'>
      <Hero/>
      <Whywechoose props={{bgColor:"#11112B",textColor:"white",svgFill:"#92DEED"}} />
      <Motto/>
       <ClientStories/>
       <ServicesWhite/>
       {/* <Projects/> */}
      <Staff/>
    </main>
  );
}
