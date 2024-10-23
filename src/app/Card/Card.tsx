import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Card = () => {
  return (
    <main className='w-[80%] mx-auto bg-white p-5'>
        <div>
            <div>
                <h2 className='text-4xl font-bold text-center my-10'>
                    What They Said
                </h2>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                <div className='bg-slate-100 w-full h-[500px] p-5 items-center'>
                    <div className=' w-full h-[340px]'>
                    <Image src="/images/image-21.png" alt='image' width={300} height={400} className='object-cover w-full h-full' />
                    </div>
                    <div>
                        <h2 className='text-center mt-2 text-[14px] tracking-wider'>
                            Essence Long Denim
                        </h2>

                        <div className='flex justify-center mt-1 space-x-1 text-yellow-400 text-[13px]'>
                            <FaStar  /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>

                        <div className='text-center mt-1 text-[10px]'>-Lisa-</div>
                        <div className='text-center text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum quisquam nisi!
                             Earum ipsum rerum velit iste blanditiis dolores praesentium?</div>
                    </div>
                </div>


                <div className='bg-slate-100 w-full h-[500px]'>
                <div className='bg-slate-100 w-full h-[500px] p-5 items-center'>
                    <div className=' w-full h-[340px]'>
                    <Image src="/images/image-22.png" alt='image' width={300} height={400} className='object-cover w-full h-full' />
                    </div>
                    <div>
                        <h2 className='text-center mt-2 text-[14px] tracking-wider'>
                            Andcable Knit Top
                        </h2>

                        <div className='flex justify-center mt-1 space-x-1 text-yellow-400 text-[13px]'>
                            <FaStar  /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>

                        <div className='text-center mt-1 text-[10px]'>-Celine-</div>
                        <div className='text-center text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum quisquam nisi!
                             Earum ipsum rerum velit iste blanditiis dolores praesentium?</div>
                    </div>
                </div>
                </div>
                <div className='bg-slate-100 w-full h-[500px]'>
                <div className='bg-slate-100 w-full h-[500px] p-5 items-center'>
                    <div className=' w-full h-[340px]'>
                    <Image src="/images/image-23.png" alt='image' width={300} height={400} className='object-cover w-full h-full' />
                    </div>
                    <div>
                        <h2 className='text-center mt-2 text-[14px] tracking-wider'>
                            Candy Stripe Boxy
                        </h2>

                        <div className='flex justify-center mt-1 space-x-1 text-yellow-400 text-[13px]'>
                            <FaStar  /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>

                        <div className='text-center mt-1 text-[10px]'>-Tiffany-</div>
                        <div className='text-center text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum quisquam nisi!
                             Earum ipsum rerum velit iste blanditiis dolores praesentium?</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Card