import React from 'react';
import Image from 'next/image';
import styles from './textLeftImgRight.module.scss';

const TextLeft = ({ children, imgSrc, title }: any) => {
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
  );
};

export default TextLeft;
