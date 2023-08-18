import React from 'react';
import Image from 'next/image';
import IMG from '@/public/piano.jpg';

const TextRightImgLeft = ({ children }) => {
  return (
    <div className='h-full w-full flex flex-col-reverse md:flex-row'>
      <div className='w-1/2 h-full relative z-1 grid place-content-center p-20 md:p-20 lg:p-40 xs:order-2'>
        {children}
      </div>
      <div className='w-1/2 h-full relative z-1 grid place-content-center xs:order-1 cursor-pointer transition-none 300ms ease-in-out'>
        <Image
          className='object-cover'
          quality={100}
          src={IMG}
          alt='some text'
          fill
          priority
        />
      </div>
    </div>
  );
};

export default TextRightImgLeft;
