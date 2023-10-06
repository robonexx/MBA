import React from 'react';
import Image from 'next/image';

const TextLeftImgRight = ({ children, imgSrc }: any) => {
  return (
    <div className='relative h-screen w-full flex flex-col-reverse md:flex-row md:justify-between items-center'>
      <div className='w-1/2 h-full relative z-1 grid place-content-center p-5 lg:p-20'>
        {children}
      </div>
      <div className='w-1/2 h-full relative z-1 xs:order-1'>
        <Image
          className='object-cover'
          quality={100}
          src={imgSrc}
          alt='some text'
          fill
          priority
        />
      </div>
    </div>
  );
};

export default TextLeftImgRight;
