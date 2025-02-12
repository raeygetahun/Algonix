import React from 'react'

function Card() {
  return (
    <div className='bg-[#11112B] px-10 flex flex-row justify-between'>
    <div>
    <h3 className=' bg-[#11112B] mt-40 ml-10 text-white font-SpaceGrotesk font-bold text-7xl leading-110'>Contact</h3>
    <h5 className='text-white text-5xl font-semibold leading-normal pt-60 '>Let’s get in touch!</h5>
    </div>
    <div className='flex pt-[108px] gap-7'>
    <div className='w-[250px] h-[200px] flex-shrink-0 flex flex-col rounded-2xl border border-opacity-20 bg-gradient-to-b from-white to-transparent '>

<div className='pl-10 pt-10'>
    <div className='w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full border border-rgba-white20 bg-gradient-to-b from-rgba-white30 via-transparent to-rgba-white10 '>
    <svg className='items-center' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_110_90)">
<path d="M20.6789 16.704C19.2291 15.464 17.7577 14.7128 16.3257 15.951L15.4706 16.6993C14.8449 17.2425 13.6817 19.7807 9.1842 14.607C4.68766 9.43984 7.36348 8.63532 7.99006 8.09678L8.84984 7.34751C10.2744 6.10654 9.73679 4.54431 8.70936 2.93619L8.08934 1.96215C7.05722 0.357774 5.93332 -0.695884 4.50502 0.543218L3.73328 1.21756C3.10202 1.67742 1.33749 3.17221 0.909472 6.01194C0.39435 9.41924 2.01933 13.3211 5.74225 17.6022C9.4605 21.8852 13.101 24.0365 16.5495 23.9991C19.4155 23.9682 21.1463 22.4303 21.6876 21.8711L22.4622 21.1959C23.8867 19.9577 23.0016 18.6971 21.5509 17.4542L20.6789 16.704Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_110_90">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    </div>

<h6 className='text-white font-poppins text-16 font-semibold leading-26 pt-10'>Phone</h6>
<h2 className='text-white font-poppins text-35 font-bold leading-32 pt-5'>+49 176 68 969 565</h2>
</div>

</div>
<div className='w-[300px] h-[200px] flex-shrink-0 rounded-2xl border border-opacity-20 bg-gradient-to-b from-white to-transparent '>
<div className='pl-10 pt-10'>
<div className='w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full border border-rgba-white20 bg-gradient-to-b from-rgba-white30 via-transparent to-rgba-white10'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21.8906 3.5625H2.10938C0.943922 3.5625 0 4.51228 0 5.67188V18.3281C0 19.4946 0.950859 20.4375 2.10938 20.4375H21.8906C23.0463 20.4375 24 19.4986 24 18.3281V5.67188C24 4.51434 23.0598 3.5625 21.8906 3.5625ZM21.5952 4.96875C21.1642 5.39742 13.7476 12.775 13.4916 13.0297C13.0931 13.4281 12.5634 13.6475 12 13.6475C11.4366 13.6475 10.9069 13.4281 10.5071 13.0284C10.3349 12.8571 3.00014 5.56097 2.40478 4.96875H21.5952ZM1.40625 18.0419V5.95898L7.48303 12.0037L1.40625 18.0419ZM2.40567 19.0312L8.48006 12.9955L9.51408 14.0241C10.1781 14.6881 11.061 15.0538 12 15.0538C12.939 15.0538 13.8219 14.6881 14.4846 14.0254L15.5199 12.9955L21.5943 19.0312H2.40567ZM22.5938 18.0419L16.517 12.0037L22.5938 5.95898V18.0419Z" fill="white"/>
</svg>
</div>
<h6 className='text-white font-poppins text-16 font-semibold leading-26 pt-10'>Email</h6>
<h2 className='text-white font-poppins text-24 font-bold leading-32 pt-5'>support@algonix.com</h2>
</div>
</div>
</div>
    </div>
  )
}

export default Card