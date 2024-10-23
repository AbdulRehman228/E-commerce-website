
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const OurProducts = () => {
  return (
    <main className='w-[80%] mx-auto bg-white p-5 '>
        <div className="text-center mt-5 ">
           <h1 className="text-4xl font-bold">Our Products</h1>
        </div>
   
        <div className='justify-center lg:ml-[225px] md:ml-[200px] ml-0'>
            <ul className='flex lg:space-x-16 md:space-x-14 space-x-1 mt-10 text-black text-center lg:text-[17px] md:text-[17px]  text-[10px]'>
                <li className='hover:bg-gray-100 w-[70px] h-[40px] p-2 hover:underline transition ease-linear duration-300 '><Link href="">Top</Link> </li>
                <li className='hover:bg-gray-100 w-[70px] h-[40px] p-2 hover:underline transition ease-linear duration-300'><Link href="">Bottom</Link> </li>
                <li className='hover:bg-gray-100 w-[70px] h-[40px] p-2 hover:underline transition ease-linear duration-300'><Link href="">Drees</Link> </li>
                <li className='hover:bg-gray-100 w-[70px] h-[40px] p-2 hover:underline transition ease-linear duration-300 '><Link href="">Set</Link> </li>
                <li className='hover:bg-gray-100 w-[70px] h-[40px] p-2 hover:underline transition ease-linear duration-300'><Link href="">Knit</Link> </li>
                <li className='hover:bg-gray-100 w-[70px] h-[40px] p-2 hover:underline transition ease-linear duration-300'><Link href="">Outer</Link> </li>
            </ul>
        </div>
        <div className='bg-gray-100 p-8'>   
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 gap-[100px] '>
          
        <div className="flex flex-col items-center">
          <Image src="/images/image-10.png" alt="Spring Image" width={380} height={380} />
          <h1 className="mt-4">Eto V Neck Yellow</h1>
          <div className=" mt-2 text-center">
            <p>Rp. 129.000</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/image-11.png" alt="Spring Image" width={380} height={380} />
          <h1 className="mt-4">Macaroon Dray Half</h1>
          <div className=" mt-2 text-center">
            <p>Rp. 139.000</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/image-12.png" alt="Spring Image" width={380} height={380} />
          <h1 className="mt-4">Wave Stripe Hally</h1>
          <div className=" mt-2 text-center">
            <p>Rp. 130.000</p>
          </div>
        </div>

      
      
      </div>


                        {/* 2nd line */}



    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-[100px] '>

        

<div className="flex flex-col items-center">
  <Image src="/images/image-13.png" alt="Spring Image" width={380} height={380} />
  <h1 className="mt-4">Eve Punching Floral</h1>
  <div className=" mt-2 text-center">
    <p>Rp. 229.000</p>
  </div>
</div>



<div className="flex flex-col items-center">
  <Image src="/images/image-14.png" alt="Spring Image" width={380} height={380} />
  <h1 className="mt-4">Floral Waffle Tee</h1>
  <div className=" mt-2 text-center">
    <p>Rp. 119.000</p>
  </div>
</div>

<div className="flex flex-col items-center">
  <Image src="/images/image-15.png" alt="Spring Image" width={380} height={380} />
  <h1 className="mt-4">Snap Pure Blouse</h1>
  <div className=" mt-2 text-center">
    <p>Rp. 225.000</p>
  </div>
</div>

  

</div>
<div>
<div className='mt-8 ml-[500px] ' >
                  <button className='bg-slate-300 text-black py-2 px-6 rounded-lg shadow-md hover:bg-slate-400 transition ease-in-out duration-200 focus:outline-none focus:ring-opacity-50'>
                    Shop Now 
                  </button>
              </div>
</div>

   </div>                   

    </main>
  )
}

export default OurProducts