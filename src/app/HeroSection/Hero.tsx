import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <main>
           <div className='w-full h-[600px]' >
           <Image src="/images/image-1.png" alt='image' width={2000} height={600}/>
           </div>
    </main>
  )
}

export default Hero