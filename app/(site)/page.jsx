'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
/* import { getProjects, getWorks } from '@/sanity/sanity-utils'; */
import Written from '@/components/works/Written';
import StageItem from '@/components/works/StageItem';
import SectionRow from '@/components/sections/sectionrow/SectionRow';
import TextLeftImgRight from '@/components/sections/sectionrow/TextLeftImgRight';
import TextHeadline from '@/components/texts/TextHeadline';
import SingleItem from '@/components/singleitem/SingleItem';
import SectionOneFourth from '@/components/sections/SectionOneFourthScreen';
import PianoImg from '@/public/piano.jpg';
import PhotoGallery from '@/public/images/photogallery.jpg';
import PianoImg2 from '@/public/piano2.jpg';
import Giftest from '@/public/gif_test.webp';
import ImageGrid from '@/components/imageGrid/ImageGrid';
import SectionFullScreen from '@/components/sections/SectionFullScreen';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/components/animations/Animations';
import { Reveal } from '@/components/animations/reveal/Reveal';

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
    <main className='w-full flex flex-col bg-white text-black box-border'>
      <SectionFullScreen>
        <SectionOneFourth>
          <Link
            href='/'
            prefetch={false}
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          <motion.h1
            className='text-2xl md:text-4xl lg:text-6xl font-thin text-center z-10
            absolute top-10'
            variants={fadeIn}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            <span
              className={`bg-gradient-to-r from-black via-zinc-900 to-black bg-clip-text text-transparent z-10 drop-shadow-sm ${playfair.className}`}
            >
              {' '}
              Markus B. Almqvist
            </span>
          </motion.h1>
          <motion.p
            className='m-auto w-full lg:w-2/5 mt-3 text-xs md:text-lg text-center text-zinc-800 drop-shadow-md z-10 px-10 absolute top-28 md:top-36'
            variants={fadeInUp}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            Award-winning composer based in Stockholm, Sweden. <br /> Writing
            music for ensembles, stage productions and film
          </motion.p>
          <span className='bg-slate-100 w-full h-full absolute left-0 top-0 -z-0 opactiy-70'></span>
        </SectionOneFourth>
        <SectionOneFourth>
          <Link
            href='/written'
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          <Reveal>
            <h2 className='relative h-fit text-white font-thin text-3xl md:text-4xl z-10'>
              Written work
            </h2>
          </Reveal>
          <Image
            alt='piano img'
            src={PianoImg}
            fill
            priority
            className='absolute left-0 top-0 -z-0 object-cover object-center group-hover:scale-110 transition-all duration-1000 cursor-pointer pointer-events-auto'
          />
        </SectionOneFourth>
        <SectionOneFourth>
          <Link
            href='/stage'
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          <h2 className='relative h-fit text-white font-thin text-3xl md:text-4xl z-10'>
            Work for stage
          </h2>
          <Image
            alt='piano img'
            src={PianoImg2}
            fill
            priority
            className='absolute left-0 top-0 -z-0 object-cover object-center group-hover:scale-110 transition-all duration-1000 cursor-pointer pointer-events-auto'
          />
        </SectionOneFourth>
        <SectionOneFourth>
          <Link
            href='/film'
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          <Reveal>
            <p className='relative h-fit text-white font-thin text-3xl md:text-4xl z-10'>
              Works for film
            </p>
          </Reveal>
          <Image
            alt='piano img'
            src={Giftest}
            fill
            priority
            className='absolute left-0 top-0 -z-0 object-cover object-center group-hover:scale-110 transition-all duration-1000 cursor-pointer pointer-events-auto'
          />
        </SectionOneFourth>
      </SectionFullScreen>
      <SectionFullScreen>
        {/*  <Reveal>
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
        </Reveal> */}
        <div className='w-full h-2/5 relative py-80'>
          <Link
            href={'/mytestpage'}
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          <Image
            alt='piano img'
            src={PhotoGallery}
            fill
            priority
            className='relative -z-0 object-cover object-center transition-all duration-1000 cursor-pointer pointer-events-auto opacity-80'
          />
        </div>
      </SectionFullScreen>
      <div className='w-screen h-full'>
        <Reveal>
          <TextHeadline title='Written work' />
        </Reveal>
        <Reveal>
          <h2 className='mt-24 font-thin text-gray-700 text-2xl md:text-4xl'>
            Lorem ipsum
          </h2>
        </Reveal>
        <motion.div
          variants={fadeIn}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <Written />
        </motion.div>
      </div>
      <SectionFullScreen>
        <Reveal>
          <TextHeadline title='Stage' />
        </Reveal>
        <Reveal>
          <h2 className='mt-24 font-thin text-white text-3xl'>Lorem ipsum</h2>
        </Reveal>
        <motion.div
          variants={fadeIn}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <StageItem />
        </motion.div>
      </SectionFullScreen>

      <Reveal></Reveal>
      <SectionRow>
        <TextLeftImgRight imgSrc={PianoImg}>
          <SingleItem data={testData} />
        </TextLeftImgRight>
      </SectionRow>
      <ImageGrid />
    </main>
  );
}
