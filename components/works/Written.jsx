import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getWorks } from '@/sanity/sanity-utils';

export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const Written = async () => {
  const works = await getWorks();
  return (
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
  );
};

export default Written;
