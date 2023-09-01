import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/sanity/sanity-utils';

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const Stage = async () => {
    const projects = await getProjects();
  return (
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
  )
}

export default Stage