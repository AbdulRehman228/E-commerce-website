import React from 'react';
import Image from 'next/image';

const Shop = () => {
  return (
    <main className='w-[80%] mx-auto bg-gray-100 p-7 mt-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 md:gap-x-32'>
            <div>
                <Image src="/images/image-8.png" alt='Discounted Product' width={300} height={300} />
            </div>

            <div>
                <h2 className='text-5xl font-bold text-center'>
                    Get 50% Off
                </h2>
                <p className='text-gray-700 mt-2 text-center'>
                    for all new product purchases<br /> 
                    min. purchase Rp. 350.000
                </p>

                <div className='mt-8 ml-[100px]' >
                   <button className='bg-slate-300 text-black py-2 px-6 rounded-lg shadow-md hover:bg-slate-400 transition ease-in-out duration-200 focus:outline-none focus:ring-2  focus:ring-opacity-50'>
                       Shop Now
                   </button>
                </div>
            </div>

            <div className=''>
                <Image src="/images/image-9.png" alt='Another Discounted Product' width={300} height={300} />
            </div>
        </div>
    </main>
  );
}

export default Shop;
