import React from 'react';
import Image from 'next/image';
import IMG from '@/public/piano.jpg';

const ImgRightTextLeft = () => {
  return (
    <div className='h-full w-full grid xs:grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
      <div className='w-full h-full relative z-1 grid place-content-center'>
        <Image
          layout='fill'
          className='object-cover'
          quality={100}
          src={IMG}
          alt='some text'
        />
      </div>
      <h6 className='w-full h-full relative z-1 grid place-content-center p-20 md:p-20 lg:p-40'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem
        reprehenderit earum nisi tempore, perspiciatis voluptas voluptate
        dignissimos rerum praesentium quasi ab aspernatur neque illo vitae ut
        excepturi veniam. Ea architecto dolor aliquid praesentium, nisi cum
        maxime necessitatibus quibusdam harum?
      </h6>
    </div>
  );
};

export default ImgRightTextLeft;
