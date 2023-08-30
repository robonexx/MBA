import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { getProjects, getWorks } from '@/sanity/sanity-utils';
import SectionRow from '@/components/sections/sectionrow/SectionRow';
import TextRightImgLeft from '@/components/sections/sectionrow/TextRightImgLeft';
import TextHeadline from '@/components/texts/TextHeadline';
import SingleItem from '@/components/singleitem/SingleItem';
import SectionOneFourth from '@/components/sections/SectionOneFourthScreen';
import PianoImg from '@/public/piano.jpg';
import PianoImg2 from '@/public/piano2.jpg';
import Giftest from '@/public/gif_test.webp';

const playfair = Playfair_Display({ subsets: ['latin-ext'], weight: '400' });

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

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

export default async function Home() {
  const projects = await getProjects();
  const works = await getWorks();
  return (
    <main className='min-h-full w-full flex flex-col items-center justify-between bg-stone-950 box-border'>
      <SectionOneFourth>
        <h1 className=' text-4xl md:text-6xl font-thin text-center z-10'>
          <span
            className={`bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent z-10 shadow-xl ${playfair.className}`}
          >
            {' '}
            Markus Bertilson
          </span>
        </h1>
        <p className='mt-3 text-xl text-center text-slate-200 drop-shadow-xl z-10 px-10'>
          Award-winning composer based in Stockholm, Sweden. Writing music for
          ensembles, stage productions and film
        </p>
        <Image
          alt='piano img'
          src={PianoImg}
          fill
          priority
          className='absolute left-0 top-0 -z-0 object-cover object-center hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto opacity-80'
        />
      </SectionOneFourth>
      <SectionOneFourth>
        <p className='relative h-fit text-white font-normal text-4xl z-10'>
          Beings
        </p>
        <span className='bg-black w-full h-full absolute left-0 top-0 -z-0 opactiy-70'></span>
      </SectionOneFourth>
      <SectionOneFourth>
        <p className='relative h-fit text-white font-normal text-4xl z-10'>
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
      <div>
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
        <h2 className='mt-24 font-thin text-gray-700 text-3xl'>Lorem ipsum</h2>

        <div className='mt-5 grid md:grid-cols-2 gap-5'>
          {projects.map((project) => (
            <Link
              href={`/${project.slug}`}
              key={project._id}
              className='relative h-72 w-full border-2 border-transparent p-1 hover:scale-105 hover:border-slate-950 transition shadow-lg'
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className='object-cover'
                />
              )}
              <div className='mt-2 absolute z-10 font-normal  bg-gradient-to-r from-slate-400 via-black-500 to-white-600 bg-clip-text text-white'>
                {project.name}
              </div>
            </Link>
          ))}
        </div>
        <TextHeadline title='Written work' />
        <h2 className='mt-24 font-thin text-white text-3xl'>Lorem ipsum</h2>
        <div className='mt-10 mb-10 grid md:grid-cols-2 gap-10'>
          {works.map((work) => (
            <Link
              href={`/work/${work.slug}`}
              key={work._id}
              className='relative h-72 w-full border-2 border-transparent p-1 hover:scale-105 hover:border-slate-950 transition shadow-lg'
            >
              {work.image && (
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  priority
                  className='object-cover'
                />
              )}
              <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
                {work.title}
              </div>
              <p>Author: {work.author}</p>
              <p>For {work.author}</p>
              <p>Year: {work.year}</p>
              <p>Duration {work.duration}</p>
            </Link>
          ))}
        </div>
      </div>
      <SectionRow>
        <TextRightImgLeft>
          <SingleItem data={testData} />
        </TextRightImgLeft>
      </SectionRow>
    </main>
  );
}
