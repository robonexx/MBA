'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import TextHeadline from '@/components/texts/TextHeadline';
import SingleItem from 'components/singleitem/SingleItem';
import SectionOneFourthScreen from '@/components/sections/screenSections/SectionOneFourthScreen';
import PianoImg from '/public/PianoHands.gif';
import PhotoGallery from '/public/images/photogallery.jpg';
import StageImg from '/public/Hemsida.jpg';
import VidGif from '/public/shiro.gif';
import SectionFullScreen from '@/components/sections/screenSections/SectionFullScreen';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/components/animations/Animations';
import { Reveal } from '@/components/animations/reveal/Reveal';

import styles from './homepage.module.scss';
import SectionOneThird from '@/components/sections/screenSections/SectionOneThird';
import { SlideUp } from '@/components/animations/reveal/SlideUp';
import LetterAnimation from '@/components/animations/letterAnimation/LetterAnimaion';
import ScrollDown from '@/components/scrolldown/ScrollDown';
import WordFromLeft from '@/components/animations/wordAnimations/WordFromLeft';
import StageItem from '@/components/works/StageItem';
import ItemsList from '@/components/works/ItemsList';
import ImageGrid from '@/components/imageGrid/ImageGrid';
import TextLeft from '@/components/sections/TextLeft';

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

const stageDummy = {
  title: 'Title de lux',
  producers: 'bill och bull',
  year: '2023',
  description: 'some desc, to be added',
  image: StageImg,
  links: {
    watch: '',
    listen: '',
    read: '',
  },
};

export default function Home() {
  const [dummyData, setDummyData] = useState(null);
  const [stageData, setStageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);

      // two data fetches with fake delay
      const promise1 = new Promise((resolve) =>
        setTimeout(() => resolve(testData), 1000)
      );
      const promise2 = new Promise((resolve) =>
        setTimeout(() => resolve(stageDummy), 1500)
      );

      Promise.all([promise1, promise2])
        .then(([dummyResult, stageResult]) => {
          setDummyData(dummyResult);
          setStageData(stageResult);

          console.log(stageResult, dummyResult);

          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return (
    <main className={styles.homepage}>
      <SectionFullScreen
        variants={fadeIn}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        <div className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto bg-slate-200 grid place-content-center py-20'>
          <h1
            variants={fadeInUp}
            initial='initial'
            animate='enter'
            exit='exit'
            className={`h-fit text-3xl md:text-5xl lg:text-7xl font-thin text-center z-10 text-zinc-900 mt-20 relative ${playfair.className}`}
          >
            Markus B. Almqvist
          </h1>

          <p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='m-auto w-full max-h-fit lg:w-4/5 text-sm md:text-base text-center text-zinc-800 drop-shadow-md z-10 px-8 relative mt-32'
          >
            Award-winning composer based in Stockholm, Sweden. <br /> Writing
            music for ensembles, stage productions and film
          </p>
          <div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <ScrollDown />
          </div>
        </div>
      </SectionFullScreen>

      {/* one thirds  test */}
      <SectionFullScreen>
        <SectionOneThird>
          <Link href='/written' />
          <WordFromLeft text='Written work' />
          <Image alt='piano img' src={PianoImg} fill priority />
        </SectionOneThird>
        <SectionOneThird>
          <Link
            href='/stage'
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          {/* <h2 className='relative h-fit text-white font-thin text-3xl md:text-4xl z-10'>
            
          </h2> */}
          <LetterAnimation text='Work for stage' />
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
        </SectionOneThird>
        <SectionOneThird>
          <Link
            href='/film'
            className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
          />
          <Reveal>
            <h2>Works for film</h2>
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
        </SectionOneThird>
      </SectionFullScreen>

      {/* resterande delar */}
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
          {stageData ? <StageItem data={stageData} /> : <div>Laoding...</div>}
        </motion.div>
      </SectionFullScreen>
      {loading ? (
        <div>Loading...</div>
      ) : (
        dummyData && (
          <SectionFullScreen>
            <TextLeft imgSrc={PianoImg} title='written work'>
              <SingleItem data={dummyData} />
            </TextLeft>
          </SectionFullScreen>
        )
      )}
      <SectionFullScreen>
        <ImageGrid />
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
          <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl bg-orange-600 '>
            Bara länk till annan sida, inget som skall finnas meds sen
          </h2>
        </div>
      </SectionFullScreen>
    </main>
  );
}
