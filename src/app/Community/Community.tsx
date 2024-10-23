import React from 'react'
import Image from 'next/image'

const Community = () => {
  return (
    <main className='w-[80%] mx-auto p-[50px]'>
        <div className='grid grid-cols-2 justify-between items-center gap-6 '>
            <div className=' text-center   h-[500px] border-r border-black  p-[50px]'>
                <h2 className=' text-[35px] font-bold leading-tight tracking-tight'>
                Get more benefits by Sign Up & Join Mejiwoo Community!
                </h2>

                <div className='mt-8 text-left ml-11'>
                    <h3 className='mt-2 font-bold'>FREE Special Gift to a new member</h3>
                    <h3 className='mt-2 font-bold'>Get 2x JIWOO Points to purchase items</h3>
                    <h3 className='mt-2 font-bold'>Get special voucher code every month</h3>
                    <h3 className='mt-2 font-bold'>Claim Voucher Disc. Up To 50%</h3>
                </div>
            </div>
            <div className='  h-[500px] mt-10 text-center p-[70px]'>
                <div>
                   <input type="text" placeholder='Full Name' className='w-full p-1 text-[13px] text-center'/>
                </div>

                <div className='mt-8'> 
                   <input type="text" placeholder='Email Adrees' className='w-full p-1 text-[13px] text-center'/>
                </div>

                <div className='mt-8'>
                   <input type="text" placeholder='Password' className='w-full p-1 text-[13px] text-center'/>
                </div>
                
                <div className='text-start'>
                    <input type="checkbox" className='mt-8 outline-none'/> I agree to all <span className='font-bold'>Terms</span> and <span className='font-bold'>Privacy Policy</span>
                </div>

                <div className='mt-8 ml-[20px] ' >
                  <button className='bg-slate-300 text-black py-2 px-6 rounded-lg shadow-md hover:bg-slate-400 transition ease-in-out duration-200 focus:outline-none focus:ring-opacity-50'>
                    Sign Up
                  </button>
              </div>

              

              

<div className='flex justify-center items-center mt-10'>
  <button className='flex items-center text-center bg-slate-300 rounded-lg py-1 px-6 hover:bg-slate-400 '>
    <Image src="/images/img-1.png" alt='Google logo' width={40} height={40} />
    <span className='ml-2'>SIGN UP WITH GOOGLE</span>
  </button>
</div>
 
<div className='flex justify-center items-center mt-5'>
  <button className='flex items-center text-center bg-slate-300 rounded-lg py-0 px-6 hover:bg-slate-400 '>
    <Image src="/images/img-2.png" alt='Google logo' width={40} height={40} />
    <span className='ml-2'>SIGN UP WITH FACEBOOK</span>
  </button>
</div> 


            </div>
        </div>
    </main>
  )
}

export default Community