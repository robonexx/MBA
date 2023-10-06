import React from 'react';
import Image from 'next/image';

const TextRightImgLeft = ({ children, imgSrc }) => {
  return (
    <div className='h-full w-full flex flex-col justify-center md:flex-row md:justify-between items-center'>
       <div className='w-full h-96 relative z-1 grid place-content-center xs:order-1 p-20 md:p-20 lg:p-40'>
        <Image
          className='object-cover'
          quality={100}
          src={imgSrc}
          alt='some text'
          fill
          priority
        />
      </div>
      <div className='w-full h-full relative z-1 grid place-content-center p-20 md:p-20 lg:p-40'>
        {children}
      </div>
     
    </div>
  );
};

export default TextRightImgLeft;
