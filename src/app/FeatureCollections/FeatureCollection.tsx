import Image from 'next/image'
import React from 'react'

const FeatureCollection = () => {
  return (
    <main className='w-[80%] mx-auto bg-white'>
        <div>
        <div className="flex justify-center">
  {/* heading */}
  <h2 className="font-bold text-center text-4xl my-10">
    Our Featured Collections
  </h2>
</div>


         <div className='grid grid-cols-3 grid-rows-2 justify-between gap-5 p-6 '>
                           {/* 1st row*/}
                           <div className="w-full h-[300px]">
                           <Image 
    src="/images/image-16.png" 
    alt="Image" 
    width={400} 
    height={300} 
    className="object-cover h-full w-full"
  />
                           </div>

                  <div className='w-ful  row-span-2 h-[635px] '>
                  <Image 
    src="/images/image-17.png" 
    alt="Image" 
    width={400} 
    height={300} 
    className="object-cover h-full w-full"
  />
                  </div>
                  <div className='w-ful h-[300px] '>
                  <Image 
    src="/images/image-18.png" 
    alt="Image" 
    width={400} 
    height={300} 
    className="object-cover h-full w-full"
  />
                  </div>
      
                        {/* 2nd row */}
                  <div className='w-ful h-[300px] '>
                  <Image 
    src="/images/image-19.png" 
    alt="Image" 
    width={400} 
    height={300} 
    className="object-cover h-full w-full"
  />
                  </div>
                  
                  <div className='w-ful h-[300px] '>
                  <Image 
    src="/images/image-20.png" 
    alt="Image" 
    width={400} 
    height={300} 
    className="object-cover h-full w-full"
  />
                  </div>
                  
                  

                  
         </div>


        </div>
    </main>
  )
}

export default FeatureCollection