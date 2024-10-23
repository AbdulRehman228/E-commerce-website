import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'

const Nav = () => {
  return (
    <main className='w-[80%] mx-auto justify-between place-content-center items-center space-x-6  h-[70px] bg-white' >
        <div className='grid grid-cols-3 items-center '>
            {/* Nav */}

            <div className='ml-7'>
                <ul className='flex space-x-14'>
                    <li className='hover:underline transition ease-linear duration-300'><Link href="/">Home</Link> </li>
                    <li className='hover:underline transition ease-linear duration-300'><Link href="/">Product</Link> </li>
                    <li className='hover:underline transition ease-linear duration-300'><Link href="/">Categories</Link> </li>
                    <li className='hover:underline transition ease-linear duration-300'><Link href="/">SALE</Link> </li>
                </ul>
            </div>

            {/* Name */}

            <div>
                <h1 className='text-center text-2xl font-bold  '>MEJIWOO</h1>
            </div>

            {/*  */}
          <div className='flex'>

                         {/* search bar */}
             <div className='flex ml-[100px]'>
                   <input type="text" name="" id="" placeholder='Search' className='p-1 text-[12px] w-[100px] h-[20px] outline-none rounded-l-md bg-slate-200 placeholder-slate-950' />
                   <div className='items-center bg-slate-200 p-1 h-[20px] rounded-r-md'>
                    <FaSearch className='w-[12px] pb-1 cursor-pointer'/>
                   </div>
            </div>   

                            {/* shopping bag */}
             <div className='ml-6 cursor-pointer'>
              <FaShoppingBag/>
             </div>

                            {/* avatar icon */}
             <div className='ml-6 cursor-pointer'>
              <FaUser />
             </div>

             

          </div>




        </div>
    </main>
  )
}

export default Nav