'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
/* import { getProjects, getWorks } from '@/sanity/sanity-utils'; */
import Written from '@/components/works/Written';
import Stage from '@/components/works/Stage';
import SectionRow from '@/components/sections/sectionrow/SectionRow';
import TextRightImgLeft from '@/components/sections/sectionrow/TextRightImgLeft';
import TextHeadline from '@/components/texts/TextHeadline';
import SingleItem from '@/components/singleitem/SingleItem';
import SectionOneFourth from '@/components/sections/SectionOneFourthScreen';
import PianoImg from '@/public/piano.jpg';
import PianoImg2 from '@/public/piano2.jpg';
import Giftest from '@/public/gif_test.webp';
import ImageGrid from '@/components/imageGrid/ImageGrid';
import SectionFullScreen from '@/components/sections/SectionFullScreen';

import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/components/animations/Animations';

const playfair = Playfair_Display({ subsets: ['latin-ext'], weight: '400' });

const testData = {
  author: 'Markus B. Almqvist',
  title: 'Beings',
  customer: 'for solo organ',
  year: '2023',
  desc: 'The concept of this piece touches on the theme of expansion. Working with an instrument that is (most often) placed in spaces with very rich acoustics, I was thinking of how I can take usage of this in my own way, reaching every wall that holds it, and that is too a part of the instrument. I was also curious of getting in contact with the inner world of the instrument. I am trying to create a vivacity and a subtlety that embraces the listener and speaks with a (for me) new voice. With this liveliness, it harmonically and dynamically expands, as well uses the incredible range of this instrument.',
  duration: '7',
  premier: 'Premiere January 2023 in Lund, Sweden, performed by Robert Bennesh',
  score: 'view score',
  songUrl: 'play',
};

export default function Home() {
  /*  const projects = await getProjects();
  const works = await getWorks(); */
  return (
    <main className='min-h-full w-full flex flex-col items-center justify-between bg-stone-950 box-border snap-y snap-mandatory'>
      <SectionFullScreen>
        <SectionOneFourth>
          <motion.h1
            className=' text-4xl md:text-6xl font-thin text-center z-10'
            variants={fadeIn}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            <span
              className={`bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent z-10 drop-shadow-sm ${playfair.className}`}
            >
              {' '}
              Markus Bertilson
            </span>
          </motion.h1>
          <motion.p
            className='mt-3 text-sm md:text-l text-center text-slate-200 drop-shadow-md z-10 px-10'
            variants={fadeInUp}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            Award-winning composer based in Stockholm, Sweden. Writing music for
            ensembles, stage productions and film
          </motion.p>
          <Image
            alt='piano img'
            src={PianoImg}
            fill
            priority
            className='absolute left-0 top-0 -z-0 object-cover object-center hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto opacity-80'
          />
        </SectionOneFourth>
        <SectionOneFourth>
          <p className='relative h-fit text-white font-black text-4xl z-10'>
            Beings
          </p>
          <span className='bg-black w-full h-full absolute left-0 top-0 -z-0 opactiy-70'></span>
        </SectionOneFourth>
        <SectionOneFourth>
          <p className='relative h-fit text-white font-semibold text-4xl z-10'>
            Gif test
          </p>
          <Image
            alt='piano img'
            src={Giftest}
            fill
            priority
            className='absolute left-0 top-0 -z-0 object-cover object-center hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto'
          />
        </SectionOneFourth>
        <SectionOneFourth>
          <p className='relative h-fit text-white font-normal text-4xl z-10 '>
            lorem ipsum
          </p>
          <Image
            alt='piano img'
            src={PianoImg2}
            fill
            priority
            className='absolute left-0 top-0 -z-0 object-cover object-center'
          />
        </SectionOneFourth>
      </SectionFullScreen>
      <SectionFullScreen className='snap-start shrink-0' >
        <h1 className='mt-20 text-4xl md:text-6xl font-thin text-center'>
          <span
            className={`bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent ${playfair.className}`}
          >
            {' '}
            Markus Bertilson
          </span>
        </h1>
        <p className='mt-3 text-xl text-center text-gray-600'>
          Award-winning composer based in Stockholm, Sweden. Writing music for
          ensembles, stage productions and film
        </p>
        <div className='w-full h-full relative py-20'>
          <Image
            alt='piano img'
            src={PianoImg}
            fill
            priority
            className='absolute left-0 top-0 -z-0 object-cover object-center hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto opacity-80'
          />
        </div>
      </SectionFullScreen>
      <SectionFullScreen className='snap-start shrink-0'>
        <TextHeadline title='Written work' />
        <h2 className='mt-24 font-thin text-gray-700 text-3xl'>Lorem ipsum</h2>
        <Written />
      </SectionFullScreen>
      <SectionFullScreen>
        <TextHeadline title='Stage' />
        <h2 className='mt-24 font-thin text-white text-3xl'>Lorem ipsum</h2>
        <Stage />
      </SectionFullScreen>

      <SectionRow>
        <TextRightImgLeft>
          <SingleItem data={testData} />
        </TextRightImgLeft>
      </SectionRow>
      <ImageGrid />
    </main>
  );
}
