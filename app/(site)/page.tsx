import Image from 'next/image';
import Link from 'next/link';
import { Audiowide } from 'next/font/google';
import { getProjects, getWorks } from '@/sanity/sanity-utils';
import SectionRow from '@/components/sections/sectionrow/SectionRow';
import TextRightImgLeft from '@/components/sections/sectionrow/TextRightImgLeft';
import TextHeadline from '@/components/texts/TextHeadline';
import SingleItem from '@/components/singleitem/SingleItem';

const audiowide = Audiowide({ subsets: ['latin-ext'], weight: '400' });

export default async function Home() {
  const projects = await getProjects();
  const works = await getWorks();

  return (
    <main className='min-h-full w-screen flex flex-col items-center justify-between bg-gray-800'>
      <SectionRow>
        <TextHeadline title='Written work' />
        <TextRightImgLeft>
          <SingleItem />
        </TextRightImgLeft>
      </SectionRow>
      <div>
        <h1 className='text-4xl md:text-6xl font-extrabold'>
          Welcome to
          <span
            className={`bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent ${audiowide.className}`}
          >
            {' '}
            Markus Bertilson
          </span>
        </h1>
        <p className='mt-3 text-xl text-gray-600'>
          Hello everyone! Check out my projects!
        </p>
        <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>

        <div className='mt-5 grid md:grid-cols-2 gap-20'>
          {projects.map((project) => (
            <Link
              href={`/${project.slug}`}
              key={project._id}
              className='relative h-96 w-full border-2 border-gray-500 rounded-xs p-1 hover:scale-105 hover:border-blue-500 transition shadow-lg'
            >
              {project.image && (

                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className='object-cover'
                  />
              )}
              <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
                {project.name}
              </div>
            </Link>
          ))}
        </div>
        <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Work</h2>

        <div className='mt-10 mb-20 grid md:grid-cols-2 gap-20'>
          {works.map((work) => (
            <Link
              href={`/work/${work.slug}`}
              key={work._id}
              className='relative h-96 w-full border-2 border-gray-500 rounded-xs p-1 hover:scale-105 hover:border-blue-500 transition shadow-lg'
            >
              {work.image && (
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  priority
                  className='object-cover rounded-lg border border-gray-500'
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
    </main>
  );
}
