import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import NavBar from '@/components/NavBar'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <main className='bg-[#11112B] overflow-hidden'>
        <NavBar/>
        <Services/>
        <HowItWorks/>
    </main>
  )
}

export default page
