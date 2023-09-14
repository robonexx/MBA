import React from 'react';
import Image from 'next/image';
import IMG from '@/public/piano.jpg';

const TextLeftImgRight = ({ children, imgSrc }: any) => {
  return (
    <div className='relative h-full w-full flex flex-col-reverse md:flex-row items-center'>
      <div className='w-full h-full relative z-1 grid place-content-center p-20 md:p-20 lg:p-40'>
        {children}
      </div>
      <div className='w-full h-full lg:h-96 relative z-1 xs:order-1'>
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
