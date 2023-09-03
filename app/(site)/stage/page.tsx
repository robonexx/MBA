'use client';
import React from 'react';
import Image from 'next/image';
import BGIMG from '@/public/Hemsida.jpg';
import Button from '@/components/button/Button';
import './stage.scss';
import Link from 'next/link';

const page = () => {
  return (
    <div className='stage'>
      <div className='contentWrapper'>
        <h1>Things That Could Survive in Space</h1>
        <h2>by Anika Edström Kawaji & Robin Haghi Premiere 2022</h2>
      </div>

      <div className='buttons'>
        <Button
          variant='default'
          title='Watch'
          onClick={() => {
            console.log('hej');
          }}
        />
        <Button
          variant='default'
          title='Listen'
          onClick={() => {
            console.log('hej');
          }}
        />
        <Button
          variant='default'
          title='Read'
          onClick={() => {
            console.log('hej');
          }}
        />
      </div>

      <div className='bg_wrapper'>
        <Image alt='background image' src={BGIMG} fill />
      </div>
      <Link href='#' className='linkToAll'>See all stage work</Link>
    </div>
  );
};

export default page;
