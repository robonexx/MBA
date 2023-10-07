'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import ItemsList from 'components/works/ItemsList';
import StageItem from 'components/works/StageItem';
import SectionRow from '@/components/sections/sectionRow/SectionRow';
import TextLeftImgRight from '@/components/sections/sectionRow/TextLeftImgRight';
import TextHeadline from 'components/texts/TextHeadline';
import SingleItem from 'components/singleitem/SingleItem';
import SectionOneFourth from 'components/sections/screenSections/SectionOneFourthScreen';
import PianoImg from '/public/PianoHands.gif';
import PhotoGallery from '/public/images/photogallery.jpg';
import StageImg from '/public/Hemsida.jpg';
import VidGif from '/public/shiro.gif';
import ImageGrid from 'components/imageGrid/ImageGrid';
import SectionFullScreen from 'components/sections/screenSections/SectionFullScreen';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, fadeInUp } from 'components/animations/Animations';
import { Reveal } from 'components/animations/reveal/Reveal';

import styles from './homepage.module.scss';

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
    <main className={styles.homepage}>
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
            className='m-auto w-full lg:w-3/5 mt-2 text-xs md:text-m text-center text-zinc-800 drop-shadow-md z-10 px-4 absolute top-20 md:top-36'
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
          <Link href='/writtenwork' />
          <Reveal>
            <h2>Written work</h2>
          </Reveal>
          <Image alt='piano img' src={PianoImg} fill priority />
        </SectionOneFourth>
        <SectionOneFourth>
          <Link
            href='/worksforstage'
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          <h2 className='relative h-fit text-white font-thin text-3xl md:text-4xl z-10'>
            Work for stage
          </h2>
          <Image
            alt='piano img'
            src={StageImg}
            fill
            priority
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            className='absolute left-0 top-0 -z-0 object-cover object-center group-hover:scale-110 transition-all duration-1000 cursor-pointer pointer-events-auto'
          />
        </SectionOneFourth>
        <SectionOneFourth>
          <Link
            href='/worksforfilm'
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          <Reveal>
            <p className='relative h-fit text-white font-thin text-3xl md:text-4xl z-10'>
              Works for film
            </p>
          </Reveal>
          <Image
            alt='piano img'
            src={VidGif}
            fill
            priority
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            className='absolute left-0 top-0 -z-0 object-cover object-center group-hover:scale-110 transition-all duration-1000 cursor-pointer pointer-events-auto'
          />
        </SectionOneFourth>
      </SectionFullScreen>
      <SectionFullScreen>
        <div className={styles.container}>
          <Link
            href={'/mytestpage'}
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          <Image
            alt='piano img'
            src={PhotoGallery}
            fill
            priority
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            className='relative -z-0 object-cover object-center transition-all duration-1000 cursor-pointer pointer-events-auto opacity-80'
          />
          <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl bg-orange-600 '>Bara länk till annan sida, inget som skall finnas meds sen</h2>
        </div>
      </SectionFullScreen>
      <SectionFullScreen>
        <Reveal>
          <TextHeadline title='Written work' />
        </Reveal>
        <Reveal>
          <h2 className='mt-24 font-thin text-gray-700 text-2xl md:text-4xl'>
            Lorem ipsum
          </h2>
        </Reveal>
      </SectionFullScreen>
      <SectionFullScreen>
        <motion.div
          variants={fadeIn}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <ItemsList />
        </motion.div>
      </SectionFullScreen>
      <SectionFullScreen>
        <Reveal>
          <TextHeadline title='Stage' />
        </Reveal>
        <Reveal>
          <h2 className='mt-24 font-thin text-white text-3xl self-center'>
            My work for stage art
          </h2>
        </Reveal>
      </SectionFullScreen>
      <SectionFullScreen>
        <motion.div
          variants={fadeIn}
          initial='initial'
          animate='enter'
          exit='exit'
        >
          <StageItem />
        </motion.div>
      </SectionFullScreen>
      <SectionFullScreen>
        <SectionRow>
          <TextLeftImgRight imgSrc={PianoImg} title='written work'>
            <SingleItem data={testData} />
          </TextLeftImgRight>
        </SectionRow>
      </SectionFullScreen>
      <SectionFullScreen>
        <ImageGrid />
      </SectionFullScreen>
    </main>
  );
}
