import Image from 'next/image';
import React from 'react';

const Cont = () => {
  return (
    <main className="w-[80%] mx-auto bg-white p-5 px-7">
      <div className="text-center mt-5">
        <h1 className="text-5xl font-bold">Season Collections</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 gap-[100px]">
        {/* Spring Collection */}
        <div className="flex flex-col items-center">
          <Image src="/images/image-2.png" alt="Spring Image" width={380} height={380} />
          <h1 className="text-2xl font-bold mt-4">SPRING</h1>
          <div className="bg-slate-300 rounded-lg w-[60px] py-1 mt-7 text-center">
            <p>More</p>
          </div>
        </div>

        {/* Summer Collection */}
        <div className="flex flex-col items-center">
          <Image src="/images/image-3.png" alt="Summer Image" width={380} height={380} />
          <h1 className="text-2xl font-bold mt-4">SUMMER</h1>
          <div className="bg-slate-300 rounded-lg w-[60px] py-1 mt-7 text-center">
            <p>More</p>
          </div>
        </div>

        {/* Autumn Collection */}
        <div className="flex flex-col items-center">
          <Image src="/images/image-4.png" alt="Autumn Image" width={380} height={380} />
          <h1 className="text-2xl font-bold mt-4">AUTUMN</h1>
          <div className="bg-slate-300 rounded-lg w-[60px] py-1 mt-7 text-center">
            <p>More</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cont;
