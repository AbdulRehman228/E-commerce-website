import Image from 'next/image'
import React from 'react'

const Fouter = () => {
  return (
    // import Image from 'next/image';

<div className='flex justify-center'>
  <Image 
    src="/images/img-3.png" 
    alt='Descriptive Alt Text' 
    width={1000} 
    height={1000} 
    layout="intrinsic" 
    className='mx-auto'
  />
</div>

  )
}

export default Fouter