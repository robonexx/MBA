import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
/* import { getWorks } from '@/sanity/sanity-utils'; */
import { dummyData } from '@/constants/DummyData';

import { motion } from 'framer-motion';

/* export const revalidate = 20;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic'; */

const StageList = () => {
  const works = dummyData;
  return (
    <motion.div className='absolute top-0 left-0 w-full h-screen mt-10 mb-10 px-5 grid md:grid-cols-2 gap-10 z-50'>
      {works ? (
        works.map((work, i) => (
          <motion.div
            className='relative'
            key={i}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          >
            <Link
              href={`/work/${work.slug}`}
              className='absolute w-full h-full top-0 left-0 z-50 cursor-pointer pointer-events-auto'
            ></Link>
            {work.image && (
              <div className='h-72 w-full absolute top-0 left-0 -z-0 overflow-hidden'>
                <Image
                  src={work?.image}
                  alt={work.title}
                  fill
                  priority
                  className='object-cover hover:scale-105 transition duration-700'
                />
              </div>
            )}
            <div className='flex flex-col items-start justify-between absolute z-10 pointer-events-none px-10 bg-slate-300/50 text-white'>
              <div className='mt-2 font-semibold  bg-gradient-to-r from-slate-400 via-black-500 to-white-600 bg-clip-text text-white shadow-sm'>
                {work.title}
              </div>
              <p className='font-thin text-gray-800 shadow-md'>
                Author: {work.author}
              </p>
              <p className='font-thin text-gray-800 shadow-md'>
                For {work.author}
              </p>
              <p className='font-thin text-gray-800 shadow-md'>
                Year: {work.year}
              </p>
              <p className='font-thin text-gray-800 shadow-md'>
                Duration {work.duration}
              </p>
            </div>
          </motion.div>
        ))
      ) : (
        <div>Loading data...</div>
      )}
    </motion.div>
  );
};

export default StageList;
