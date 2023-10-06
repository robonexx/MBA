import React from 'react';
import Image from 'next/image';
import IMG from '/public/images/markusB.jpg';
import { Playfair_Display } from 'next/font/google';


const playfair = Playfair_Display({ subsets: ['latin-ext'], weight: '400' });

const about = () => {
  return (
    <div className='h-screen w-full grid place-content-center'>
      <div className='relative h-full w-full flex flex-col md:flex-row'>
        <div className='w-full h-screen relative z-1 grid place-content-center xs:order-1'>
          <Image
            className='object-cover'
            quality={100}
            src={IMG}
            alt='some text'
            fill
            priority
          />
        </div>
        <div className='w-full h-full relative z-1 grid place-content-center p-20 md:p-20 lg:p-40'>
          <h2 className={`${playfair.className} text-thin text-base mb-20 md:text-2xl lg:text-3xl text-zinc-800`}>Markus B Almqvist</h2>
          <p className='mb-10'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            molestias optio. Fugiat et laudantium ad blanditiis aliquam quae
            inventore doloremque laboriosam maiores aspernatur voluptates nisi
            dolorum explicabo iste exercitationem fugit, assumenda mollitia ut
            alias architecto odit dolore rerum illo commodi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            molestias optio. Fugiat et laudantium ad blanditiis aliquam quae
            inventore doloremque laboriosam maiores aspernatur voluptates nisi
            dolorum explicabo iste exercitationem fugit, assumenda mollitia ut
            alias architecto odit dolore rerum illo commodi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
