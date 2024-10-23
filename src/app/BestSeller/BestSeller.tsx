import Image from 'next/image';
import React from 'react';

const Cont = () => {
  return (
    <main className="w-[80%] mx-auto  bg-white p-5 px-7">
      <div className="text-center mt-5">
        <h1 className="text-5xl font-bold">Our Best Seller</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 gap-[100px]">
        
        <div className="flex flex-col items-center">
          <Image src="/images/image-5.png" alt="Spring Image" width={380} height={380} />
          <h1 className="mt-4">Auphoria Crop Blouse</h1>
          <div className=" mt-2 text-center">
            <p>Rp. 125.000</p>
          </div>
        </div>

        
        <div className="flex flex-col items-center">
          <Image src="/images/image-6.png" alt="Summer Image" width={380} height={380} />
          <h1 className=" mt-4">Venus Halter Dress</h1>
          <div className=" mt-2 text-center">
          <p>Rp. 180.000</p>
          </div>
        </div>

        
        <div className="flex flex-col items-center">
          <Image src="/images/image-7.png" alt="Autumn Image" width={380} height={380} />
          <h1 className=" mt-4">Snap Pure Blouse</h1>
          <div className=" mt-2 text-center">
            <p>Rp. 129.000</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cont;
