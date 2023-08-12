import Image from 'next/image';
import Link from 'next/link';
import { Audiowide } from 'next/font/google';

import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';

const audiowide = Audiowide({ subsets: ['latin-ext'], weight: '400' });

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1 className='text-7xl font-extrabold'>
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

        <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <Link
              href={`/${project.slug}`}
              key={project._id}
              className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className='object-cover rounded-lg border border-gray-500'
                />
              )}
              <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
