import React from 'react';
import Image from 'next/image';
import styles from './textLeftImgRight.module.scss';

const TextLeftImgRight = ({ children, imgSrc, title }: any) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.content}>{children}</div>
      <div className={styles.image}>
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
    /*  <div className='relative h-screen w-full flex flex-col-reverse md:flex-row md:justify-between items-center'>
      <h2 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-4xl uppercase text-white drop-shadow-md'>{title}</h2>
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
    </div> */
  );
};

export default TextLeftImgRight;
