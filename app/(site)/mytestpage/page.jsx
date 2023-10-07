'use client';
import React from 'react';
import ImageLightBox from 'components/imageLightBox/ImageLightBox';
import WordFromLeft from '@/components/animations/wordAnimations/WordFromLeft';
import LetterAnimation from '@/components/animations/letterAnimation/LetterAnimaion';
const page = () => {
  return (
    <div className='bg-black relative mt-20 md:p-20 min-h-screen w-full'>
      <ImageLightBox />
      <section className='bg-black grid place-content-center relative mt-20 md:p-20 h-screen w-full'>
        <LetterAnimation text='Markus B Almqvist' />
      </section>
      <section className='bg-black grid place-content-center relative mt-20 md:p-20 h-screen w-full'>
        <WordFromLeft text='Slide in from left Yoohooo!!!' />
      </section>
      <section className='bg-black grid place-content-center relative mt-20 md:p-20 h-screen w-full'>
        <WordFromLeft text='Slide in from right Yoohooo!!!' />
      </section>
    </div>
  );
};

export default page;
